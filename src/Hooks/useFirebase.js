/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import {
    createUserWithEmailAndPassword, getAuth,
    GoogleAuthProvider,
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signOut
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import initializeAuthentication from '../Firebase/initializeAuth';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const auth = getAuth();

    const signInUsingGoogle = (url) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                history.push(url)
            })
            .finally(() => setIsLoading(false),
            );
    };

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    };


    const processLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const registerNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        setUser,
        processLogin,
        registerNewUser
    };
};

export default useFirebase;
