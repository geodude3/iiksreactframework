import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./compStyles/menuBar.css";

class MenuBar extends Component {
    state = {  } 
    render() { 

        return (
            <React.Fragment>
                <div id='menuBar'>
                    <Link className='button' to="/"><button className='btn btn-primary'>Home</button></Link>
                    <Link className='button' to="/Ihsan"><button className='btn btn-primary'>Ihsan</button></Link>
                    <Link className='button' to="/api"><button className='btn btn-primary'>API</button></Link>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MenuBar;