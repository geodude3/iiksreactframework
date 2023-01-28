import React from "react";
import "../styles/App.css"
import Axios from "axios";
import "../styles/reportLights.css"


function ReportLights() {

    const url = "https://iiksserver.herokuapp.com/lights";

    const [room, setRoom] = React.useState({
        room:"",
        mode:"Report",
        value: "Congratulate",
        pass: ""
    });


    const handleRoomChange = (e) => {
        const newdata = { room: e.target.value, mode:room.mode, value:room.value, pass:room.pass };
        setRoom(newdata)
    };
    const handlePassChange = (e) => {
        const newdata = { room: room.room, mode:room.mode, value:room.value, pass: e.target.value };
        setRoom(newdata)
    };
    
    let [message, setMessage] = React.useState();

    const handleSubmit = (e) => {

        let statusMessage;
        if(room.mode === 'Congratulate')statusMessage = 'Congratulation'; else statusMessage = 'Report';
        
        
        e.preventDefault();

        Axios.post(url,{
            item:room.room,
            status:room.mode,
            pass:room.pass
        })
         
        .then((message)=>{

            console.log(message.data)
            console.log(message.data.double)
            if(message.data.double){
                if(message.data.double === '0'){
                    console.log("not double")
                    console.log(message.data.message," ",room.mode," ",message.data.email);
                    setMessage(`${message.data.message} ${statusMessage} email sent to: ${message.data.email}`);
                }else{
                    console.log("double")
                    console.log(message.data.message," ",room.mode," ",message.data.emails[0]," ",message.data.emails[1])
                    setMessage(`${message.data.message} ${statusMessage} email sent to: ${message.data.emails[0]} ${message.data.emails[1]}`);
                }
            }else{
                console.log(message.data.message)
                setMessage(`${message.data.message}`); 
            }
        
            setTimeout(()=>setMessage(""),7000)
        })

        setRoom(prevRoom => ({ room: "", mode:room.mode,value:room.value, pass:"" }));

    
       
    };
    const handlePress = (e) => {
        document.getElementById("submit").click();
        
    };
    const handleCongrats = (e) => {
        e.preventDefault();
        let newdata;
        if(room.mode === "Report"){
            console.log(room.mode);
            newdata = { room: room.room, mode:"Congratulate",value:"Report",pass:room.pass  };
        }else if(room.mode === "Congratulate"){
            newdata = { room: room.room, mode:"Report",value:"Congratulate", pass:room.pass  };
        }
        setRoom(newdata)
        console.log(room.mode);
    }
    

    return(
        <div className="body">
            <h1>Welcome to the ReportLights website</h1>
            <p>
                Input classroom/office # to Report lights. 
            </p>
            <p>
            If you have noticed a certain classroom/office has been turning off the lights more often, press <b>"Congratulate"</b> to send a congratulation email.
            </p>
            <b>
                <p>
                    Email type: <o>{room.mode}</o>           
                    <form name="mode" onSubmit={handleCongrats}><input name="modeButton" value={room.value} type="submit"></input></form> 
                </p>
            </b>
            <form id="form" onSubmit={handleSubmit}>
                <input onSubmitEditing={handlePress}
                    value={room.room} onChange={handleRoomChange} pattern="[0-9]*" type="number" placeholder="Room #" id="room"/>
                <input onSubmitEditing={handlePress}
                    value={room.pass} onChange={handlePassChange} type="text" placeholder="Password" id="pass"/>
                <input id="submit" type="submit"></input>
            </form>
            
            <p style={{margin:20,marginLeft:1}}>{message}</p>
        </div>
    )
}
export default ReportLights;