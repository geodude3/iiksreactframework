import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./compStyles/menuBar.css";

class MenuBar extends Component {
    state = {  } 
    render() { 

        return (
            <React.Fragment>
                <div id='menuBar'>
                    <Link className='button' to="/"><button className='btn btn-primary btn-lg'>Home</button></Link>
                    <Link className='button' to="/about"><button className='btn btn-primary btn-lg'>About</button></Link>
                    <Link className='button' to="/api"><button className='btn btn-primary btn-lg'>API</button></Link>
                    <Link className='button' to="/projects"><button className='btn btn-primary btn-lg'>Projects</button></Link>

                </div>
            </React.Fragment>
        );
    }
}
 
export default MenuBar;