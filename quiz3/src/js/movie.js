import React, { useContext } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { Context, Provider } from "./context";
import About from "./about";
import List from "./list";
import Search from "./search";
import Form from "./forms";

const Movie = () => {
    const [user, , , , , , , , ,] = useContext(Context);

    const redirect = () => {
        if (localStorage.getItem("login") === "false") {
            return <Redirect to="/login" />;
        }
    }

    return (
        <>
            <section>
                {redirect()}
                <Search />
                <List />
                <Form />
            </section>
        </>
    );
}

export default Movie
