import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Doctor from './components/Doctor/Doctor';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Header />
                    <Switch>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/services">
                            <Services />
                        </Route>
                        <PrivateRoute exact path="/service/:id">
                            <ServiceDetails />
                        </PrivateRoute>
                        <Route exact path="/doctors">
                            <Doctor />
                        </Route>
                        <Route exact path="/contacts">
                            <Contact />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
