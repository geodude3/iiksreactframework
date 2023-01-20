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
    
    let [message, setMessage] = React.useState();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        Axios.post(url,{
            item:room.room
        })
        
        .then((message)=>{

            if(message.data.emails){
                console.log(message.data.message," ",message.data.emails[0]," ",message.data.emails[1])
                setMessage(`${message.data.message} ${message.data.emails[0]} ${message.data.emails[1]}`);
            }else{
                console.log(message.data.message)
                setMessage(`${message.data.message}`); 
            }
        
                setTimeout(()=>setMessage(""),7000)
        })

        setRoom(prevRoom => ({ room: "" }));

    
       
    };
    const handlePress = (e) => {
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
            <p style={{margin:20,marginLeft:1}}>{message}</p>
        </div>
    )
}
export default ReportLights;