import React from "react";
import logo from "../images/iiks.jpg"
import "../styles/home.css"
import "../styles/App.css"


function Home() {
    return(
        <div className="body">
            <img id="logo"src={logo} alt="Logo"></img>
        </div>
    )
}

export default Home;