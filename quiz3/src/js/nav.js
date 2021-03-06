import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import axios from "axios";
import { Context } from "./context";

const Nav = () => {
    const [, setUser, film, setFilm, , , , , view, setView] = useContext(Context);

    useEffect(() => {
        if (film.length === 0) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then(res => {
                    setFilm({
                        ...film,
                        action: "create", id: 0,
                        lists: res.data.map(el => {
                            return {
                                id: el.id,
                                title: el.title,
                                description: el.description,
                                year: el.year,
                                duration: el.duration,
                                genre: el.genre,
                                rating: el.rating,
                                review: el.review,
                                image_url: el.image_url
                            }
                        })
                    })
                })
        }
        if (view.length !== film.length) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then(res => {
                    setView({
                        ...view,
                        action: "create", id: 0,
                        lists: res.data.map(el => {
                            return {
                                id: el.id,
                                title: el.title,
                                description: el.description,
                                year: el.year,
                                duration: el.duration,
                                genre: el.genre,
                                rating: el.rating,
                                review: el.review,
                                image_url: el.image_url
                            }
                        })
                    })
                })
        }
    }, [film, setFilm, view, setView])

    const logout = () => {
        localStorage.setItem("login", false)
        setUser(
            {
                userName: "",
                password: "",
                isLogin: false
            }
        )
    }

    return (
        <header>
            <img alt="logo" src={logo} width="200px" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    {
                        localStorage.getItem("login") === "true" &&
                        <li>
                            <Link to="/movie">Movie List Editor</Link>
                        </li>
                    }
                    <li>
                        {
                            localStorage.getItem("login") === "false" && <Link to="/login">Login</Link>
                        }
                        {
                            localStorage.getItem("login") === "true" && <Link to="/login" onClick={logout}>Logout</Link>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
