import React from "react";
import {Link} from 'react-router-dom';
import "../styles/about.css"

import "../styles/App.css"

function About() {
    return(
        <div className="body">
            <div id="links">
                <Link className='menuElement' to="/projects"><button className='btn btn-danger btn-lg'>Projects</button></Link>
                <Link className='menuElement' to="/sports"><button className='btn btn-danger btn-lg'>Sports</button></Link>
            </div>

            <h1>About IIKS</h1>
            <p>

                IIKS is an organisation created in 2016. 
                Our operations, ranging from airline management to our contributions in the ion propulsion sector, are very diverse. 
                IIKS has a number of high performance sports teams including ski racing, mountain biking, sailing, soccer 
                and more - see sports tab for more info.
            </p>
        </div>
    )
}
export default About;