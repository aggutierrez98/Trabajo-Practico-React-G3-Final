import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { GeneroPage } from '../pages/GeneroPage';

import { HomePage } from '../pages/HomePage';
import { LibroPage } from '../pages/LibroPage';
import { PersonaPage } from '../pages/PersonaPage';

import "../styles/router/styles.css"

export const AppRouter = () => {


    return (

        <Router>
            <div className="navbar-position">

                <Navbar />
            </div>

            <Switch>
                <Route exact path="/" component={HomePage} />

                <Route exact path="/persona" component={PersonaPage} />
                <Route exact path="/genero" component={GeneroPage} />
                <Route exact path="/libro" component={LibroPage} />

                <Redirect to="/" />
            </Switch>
        </Router>

    )
}