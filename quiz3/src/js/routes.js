import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./context";
import Nav from './nav';
import Home from "./home";
import About from "./about";
import Movie from "./movie";
import Login from "./login";

const Routes = () => {
    return (
        <>
            <Router>
                <Provider>
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/movie">
                            <Movie />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                    <footer>
                        <h5>copyright &copy; 2020 by Sanbercode</h5>
                    </footer>
                </Provider>
            </Router>
        </>
    );
}

export default Routes
