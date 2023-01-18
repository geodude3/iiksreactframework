import React from "react";
import "../styles/App.css"
import Axios from "axios";
import "../styles/reportLights.css"


function ReportLights() {

    const url = "https://iiksserver.herokuapp.com/lights";

    const [room, setRoom] = React.useState({
        room:""
    });

    const handleChange = (e) => {
        const newdata = { room: e.target.value };
        setRoom(newdata)
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();

        Axios.post(url,{
            item:room.room
        })
        .then((res) => {
            console.log(res.data)
        })

        setRoom(prevRoom => ({ room: "" }));

    
       
    };
    const handlePress = (e) => {
        e.preventDefault();
        document.getElementById("submit").click();
        
    };
    

    return(
        <div className="body">
            <h1>Welcome to the ReportLights website</h1>
            <p>
                Input classroom # to report lights.
            </p>
            <form id="form" onSubmit={handleSubmit}>
                <input onSubmitEditing={handlePress}
                    value={room.room} onChange={handleChange} pattern="[0-9]*" type="number" placeholder="Room #" id="room"/>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    )
}
export default ReportLights;