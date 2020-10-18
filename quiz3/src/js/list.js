import React, { useContext } from "react";
import { Context } from "./context";
import axios from "axios";

const List = () => {
    const [, , film, setFilm, , , , setInputFilm, view,setView] = useContext(Context);

    const handleEdit = (event) => {
        event.preventDefault();
        let id = parseInt(event.target.value);
        setInputFilm({
            id: id, action: "editFilm",
            title: "",
            description: "",
            year: "",
            duration: "",
            genre: "",
            rating: "",
            image_url: ""
        })
    }

    const handleDelete = (event) => {
        let id = parseInt(event.target.value)

        let newFilm = film.lists.filter(el => el.id !== id)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${id}`)
            .then(res => {
                console.log(res)
            })

        setView({ ...film, lists: [...newFilm] })
        setFilm({ ...film, lists: [...newFilm] })
    }

    return (
        <>
            <h1>Daftar Film</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Duration</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.length !== 0 && view.lists.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td><span className="text">{item.description}</span></td>
                                    <td>{item.year}</td>
                                    <td>{item.duration}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.rating}</td>
                                    <td>
                                        <button value={item.id} onClick={handleEdit}>Edit</button>
                                        <button value={item.id} onClick={handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default List;