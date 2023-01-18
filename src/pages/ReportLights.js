import React from "react";
import "../styles/App.css"
import Axios from "axios";

function ReportLights() {

    const url = "https://iiksserver.herokuapp.com/lights";

    const [room, setRoom] = React.useState(null,{
        room:""
    });

    const handleChange = (e) => {
        const newdata = {...room};
        newdata[e.target.id] = e.target.value;
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
        const newdata = "";
        newdata[e.target.id] = e.target.value;
        setRoom(newdata)
       
    };
    

    return(
        <div className="body">
            <h1>Welcome to the ReportLights website</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Room #" id="room"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default ReportLights;