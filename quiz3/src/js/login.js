import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "./context";

const Login = () => {
    const [user, setUser, film, setFilm, inputUser, setInputUser, inputFilm, setInputFilm] = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();

        let userName = inputUser.userName;
        let password = inputUser.password;

        setUser(
            {
                userName: userName,
                password: password,
                isLogin: true
            }
        )
    }

    const redirect = () => {
        if (user.isLogin) {
            return <Redirect to="/" />;
        }
    }

    const handleChange = (event) => {
        let typeOfInput = event.target.name;

        switch (typeOfInput) {
            case "userName":
                {
                    setInputUser({ ...inputUser, userName: event.target.value });
                    break
                }
            case "password":
                {
                    setInputUser({ ...inputUser, password: event.target.value });
                    break
                }
            default:
                { break; }
        }
    }

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="formItem">
                        <div className="formLabel"><label><b>Username: </b></label></div>
                        <div className="formInput">
                            <input type="text" name="userName" value={inputUser.userName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="formItem">
                        <div className="formLabel"><label><b>Password: </b></label></div>
                        <div className="formInput">
                            <input type="password" name="password" value={inputUser.password} onChange={handleChange} />
                        </div>
                    </div>
                    {redirect()}
                    <button>Login</button>
                </form>
            </section>
        </>
    )
}

export default Login;