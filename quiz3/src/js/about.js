import React from "react";

function Detail(props){
    return <li><b>{props.title}:</b> {props.value} </li>
}

const About = () => {
    return (
        <>
            <section >
                <div style={{border: "1px solid #ccc"}}>
                    <h1>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                    <ol>
                        <Detail title="Nama" value="Christoper Jonathan" />
                        <Detail title="Email" value="christoper21jo@gmail.com" />
                        <Detail title="Sistem Operasi yang digunakan" value="Windows" />
                        <Detail title="Akun Github" value="Christo21" />
                        <Detail title="Akun Telegram" value="Drac" />
                    </ol>
                </div>
            </section>
        </>
    )
}

export default About;