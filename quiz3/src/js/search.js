import React, { useContext } from "react";
import { Context } from "./context";

const Search = () => {
    const [, , film, , , , inputFilm, setInputFilm, ,setView] = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();

        let title = inputFilm.search;
        let newfilm = film.lists.filter(el => {
            return el.title.toString().toLowerCase().indexOf(title) !== -1
        })

        setView({
            lists: [...newfilm]
        })
    }

    const handleChange = (event) => {
        setInputFilm({
            ...inputFilm,
            search: event.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="formItem">
                    <div className="formInput">
                        <input type="text" value={inputFilm.search} onChange={handleChange} />
                        <button>Search</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Search;