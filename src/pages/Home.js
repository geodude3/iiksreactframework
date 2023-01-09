import React from "react";
import logo from "../images/iiks.jpg"
import "../styles/home.css"
import "../styles/App.css"


function Home() {
    return(
        <div className="Body, body">
            <img id="logo"src={logo} alt="Logo"></img>
            <h1 className="element">Join us on the Bleeding Edge of Innovation.</h1>
        </div>
    )
}

export default Home;