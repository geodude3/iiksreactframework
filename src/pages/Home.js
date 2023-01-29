import React from "react";
import logo from "../images/iiks.jpg"
import "../styles/home.css"
import "../styles/App.css"


function Home() {
    return(
        <div className="Body, body">
            <img id="logo"src={logo} alt="Logo"></img>
            <h1 className="element">Join us on the Cutting Edge of Innovation.</h1>
            <p className="description">This full stack website was built from the ground up using the React Javascript framework and Node Javascript running on an external server. Created by Ihsan.</p>
        </div>
    )
}

export default Home;