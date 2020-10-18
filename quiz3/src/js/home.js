import React, { useContext, useEffect } from "react";
import { Context } from "./context";
import axios from "axios";
import { render } from "@testing-library/react";

class Item extends React.Component {
    render() {
        return (
            <>
                <div><h3>{this.props.title}</h3></div>
                <div className="itemHeader">
                    <img alt="" src={this.props.image_url} width="200px" />
                    <div>
                        <p><b>Rating {this.props.rating}</b></p>
                        <p><b>Durasi: {this.props.duration} Jam</b></p>
                        <p><b>Genre: {this.props.genre}</b></p>
                    </div>
                </div>
                <div>
                    <b>Deskripsi: </b> {this.props.description}
                </div>
            </>
        );
    }
}

class Home extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            film: null
        }
    }

    render() {
        const [, , film, , , , , , ,] = this.context
        return (
            <>
                <section >
                    <h1>Daftar Film Film Terbaik</h1>
                    {
                        film.length !== 0 && film.lists.map(item => {
                            return (
                                <>
                                    <Item title={item.title}
                                        image_url={item.image_url}
                                        rating={item.rating}
                                        duration={item.duration}
                                        genre={item.genre}
                                        description={item.description} />
                                    <br />
                                    <hr />
                                </>
                            )
                        })
                    }
                </section>
            </>
        );
    }
}

export default Home;