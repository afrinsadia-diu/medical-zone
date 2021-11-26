/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [IsLogin, setlogin] = useState(false);
    const { signInUsingGoogle, registerNewUser, processLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log(email, password, name);

    const NameSignUpHandle = (e) => {
        setName(e.target.value);
    };

    const EmailsignUpHandle = (e) => {
        setEmail(e.target.value);
    };

    const PasswordSignUpHandle = (e) => {
        setPassword(e.target.value);
    };
    // console.log(name, email, password);
    const handleRegistration = (e) => {
        e.preventDefault();
        // console.log(name, email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
        }
        setError('');
        if (!name) {
            processLogin(email, password)
                .then((result) => {
                    const { user } = result;
                    console.log(user);
                    setError('');
                    history.push(redirect_url);
                })
                .catch((error) => {
                    setError(error.message);
                });
        } else {
            registerNewUser(email, password)
                .then((result) => {
                    const { user } = result;
                    console.log(user);
                    setError('');
                    history.push(redirect_url);
                })
                .catch((error) => {
                    setError(error.message);
                });
            setName('');
        }
    };

    return (
        <>
            <div className="sign-up-form">
                <div className="sing_up_cotanier">
                    <h4 className="page-title">{IsLogin ? 'Sign up' : 'Login'}</h4>
                    {IsLogin ? (
                        <h6 className="page-sub-title">
                            Already have an account{' '}
                            <span onClick={() => setlogin(!IsLogin)}>Log in</span>
                        </h6>
                    ) : (
                        <h6>
                            Dont have an account{' '}
                            <span onClick={() => setlogin(!IsLogin)}> sign up </span>
                        </h6>
                    )}
                    <form onSubmit={handleRegistration}>
                        {IsLogin ? (
                            <div className="user_name_rapper">
                                <label htmlFor="user_name"> Name </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="user_name"
                                    onBlur={NameSignUpHandle}
                                />
                            </div>
                        ) : null}
                        <div className="user_email">
                            <label htmlFor="user_email"> Email </label>
                            <input
                                type="text"
                                name="email"
                                id="user_email"
                                onBlur={EmailsignUpHandle}
                            />
                        </div>
                        <div className="user_password">
                            <label htmlFor="user_password"> Password </label>
                            <input
                                type="password"
                                name="password"
                                id="user_password"
                                onBlur={PasswordSignUpHandle}
                            />
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <div className="submit_button">
                            <Button className="primary" type="submit">
                                {IsLogin ? 'Sign up' : 'Login'}
                            </Button>
                        </div>
                    </form>
                    <div className="social">
                        <Button onClick={() => signInUsingGoogle(redirect_url)} className="warning">
                            Google
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
