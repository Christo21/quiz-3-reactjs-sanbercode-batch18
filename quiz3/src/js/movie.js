import React from "react";
import { Redirect } from "react-router-dom";
import List from "./list";
import Search from "./search";
import Form from "./forms";

const Movie = () => {

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
