import React, { useContext, useEffect } from "react"
import axios from "axios"
import { Context } from "./context";

const Form = () => {
    const [, , film, setFilm, , , inputFilm, setInputFilm, , setView] = useContext(Context);

    const handleChange = (event) => {
        let typeOfInput = event.target.name

        switch (typeOfInput) {
            case "title":
                {
                    setInputFilm({ ...inputFilm, title: event.target.value });
                    break
                }
            case "description":
                {
                    setInputFilm({ ...inputFilm, description: event.target.value });
                    break
                }
            case "year":
                {
                    setInputFilm({ ...inputFilm, year: event.target.value });
                    break
                }
            case "duration":
                {
                    setInputFilm({ ...inputFilm, duration: event.target.value });
                    break
                }
            case "genre":
                {
                    setInputFilm({ ...inputFilm, genre: event.target.value });
                    break
                }
            case "rating":
                {
                    setInputFilm({ ...inputFilm, rating: event.target.value });
                    break
                }
            case "image_url":
                {
                    setInputFilm({ ...inputFilm, image_url: event.target.value });
                    break
                }
            default:
                { break; }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let title = inputFilm.title;
        let description = inputFilm.description;
        let year = inputFilm.year;
        let duration = inputFilm.duration;
        let genre = inputFilm.genre;
        let rating = inputFilm.rating;
        let image_url = inputFilm.image_url;

        console.log(inputFilm.action)
        if (inputFilm.action !== "edit") {
            axios.post(`http://backendexample.sanbercloud.com/api/movies`, { title, description, year, duration, genre, rating, image_url })
                .then(res => {
                    setFilm(
                        {
                            lists: [
                                ...film.lists,
                                {
                                    id: res.data.id,
                                    title: inputFilm.title,
                                    description: inputFilm.description,
                                    year: inputFilm.year,
                                    duration: inputFilm.duration,
                                    genre: inputFilm.genre,
                                    rating: inputFilm.rating,
                                    image_url: inputFilm.image_url
                                }]
                        })
                    setView(
                        {
                            lists: [
                                ...film.lists,
                                {
                                    id: res.data.id,
                                    title: inputFilm.title,
                                    description: inputFilm.description,
                                    year: inputFilm.year,
                                    duration: inputFilm.duration,
                                    genre: inputFilm.genre,
                                    rating: inputFilm.rating,
                                    image_url: inputFilm.image_url
                                }]
                        })
                })
        } else if (inputFilm.action === "edit") {
            axios.put(`http://backendexample.sanbercloud.com/api/movies/${inputFilm.id}`, { title, description, year, duration, genre, rating, image_url })
                .then((res) => {
                    let newfilm = film.lists.map(el => {
                        if (el.id === inputFilm.id) {
                            el.id = res.data.id
                            el.title = inputFilm.title
                            el.description = inputFilm.description
                            el.year = inputFilm.year
                            el.duration = inputFilm.duration
                            el.genre = inputFilm.genre
                            el.rating = inputFilm.rating
                            el.image_url = inputFilm.image_url
                            return el
                        }
                        return el
                    })

                    setFilm({
                        lists: [...newfilm]
                    })

                    setView({
                        lists: [...newfilm]
                    })
                })
        }

        setInputFilm({
            action: "create",
            title: "",
            description: "",
            year: "2020",
            duration: "120",
            genre: "",
            rating: "0",
            image_url: ""
        })


    }

    useEffect(() => {
        console.log(inputFilm.length === 0)
        if (inputFilm.action === "editFilm") {
            let editFilm = film.lists.find(el => el.id === inputFilm.id)
            setInputFilm({ ...editFilm, action: "edit" });
        } else if (inputFilm.length === 0) {
            setInputFilm({
                year: "2020",
                duration: "120",
                rating: "0"
            })
        }
    }, [inputFilm, setInputFilm])

    return (
        <>
            <h1>Form Daftar Harga Buah</h1>

            <form onSubmit={handleSubmit}>
                <div className="formItem">
                    <div className="formLabel"><label><b>Title: </b></label></div>
                    <div className="formInput">
                        <input type="text" name="title" value={inputFilm.title} onChange={handleChange} />
                    </div>
                </div>
                <div className="formItem">
                    <div className="formLabel"><label><b>Description: </b></label></div>
                    <div className="formInput">
                        <textarea rows="3" cols="22" name="description" value={inputFilm.description} onChange={handleChange} />
                    </div>
                </div>
                <div className="formItem">
                    <div className="formLabel"><label><b>Year: </b></label></div>
                    <div className="formInput">
                        <input type="number" name="year" value={inputFilm.year} min="1980" onChange={handleChange} />
                    </div>
                </div>
                <div className="formItem">
                    <div className="formLabel"><label><b>Duration: </b></label></div>
                    <div className="formInput">
                        <input type="number" name="duration" value={inputFilm.duration} onChange={handleChange} />
                    </div>
                </div>
                <div className="formItem">
                    <div className="formLabel"><label><b>Genre: </b></label></div>
                    <div className="formInput">
                        <input type="text" name="genre" value={inputFilm.genre} onChange={handleChange} />
                    </div>
                </div>
                <div className="formItem">
                    <div className="formLabel"><label><b>Rating: </b></label></div>
                    <div className="formInput">
                        <input type="number" name="rating" value={inputFilm.rating} min="0" max="10" onChange={handleChange} />
                    </div>
                </div>
                <div className="formItem">
                    <div className="formLabel"><label><b>Image Url: </b></label></div>
                    <div className="formInput">
                        <textarea rows="3" cols="22" name="image_url" value={inputFilm.image_url} onChange={handleChange} />
                    </div>
                </div>
                <button >Submit</button>
            </form>
        </>
    )
}

export default Form
