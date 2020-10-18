import React, { useContext } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./context";
import About from "./about";
import List from "./list";
import Search from "./search";
import Form from "./forms";

const Movie = () => {
    return (
        <>
            <section>
                <Search />
                <List />
                <Form />
            </section>
        </>
    );
}

export default Movie
