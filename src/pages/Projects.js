import React from "react";
import "../styles/App.css"
import EHD1 from "../images/EHD1.jpg"
import EHD2 from "../images/EHD2.jpg"
import EHD3 from "../images/EHD3.jpg"


function Projects() {
    return (
        <div className="body">
            <h1>Welcome to to Projects website</h1>
            <div>
                IIKS is a leader in the field of Electrohydrodynamic (EHD), or ionic, propulsion. The lab has its own EHD thrusters as well as a 50kV 100W high voltage power converter (HVPC).
                Latest research includes the optimisation of EHD thrusters with regard to electrode pair spacing.
            </div>
            <img id="EHD1" src={EHD1} alt="EHD1"></img>
            <img id="EHD2" src={EHD2} alt="EHD2"></img>
            <img id="EHD3" src={EHD3} alt="EHD3"></img>

        </div>
    )
}
export default Projects