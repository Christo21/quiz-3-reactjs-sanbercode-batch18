import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = props => {
    const [user, setUser] = useState({
        name: "",
        pass: "",
        isLogin: false
    });
    const [film, setFilm] = useState([]);

    const [inputUser, setInputUser] = useState({});
    const [inputFilm, setInputFilm] = useState([]);

    const [view, setView] = useState([]);

    return (
        <Context.Provider value={[user, setUser, film, setFilm, inputUser, setInputUser, inputFilm, setInputFilm, view, setView]}>
            {props.children}
        </Context.Provider>
    )
}