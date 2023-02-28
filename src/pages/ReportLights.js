import React from "react";
import "../styles/App.css"
import Axios from "axios";
import "../styles/reportLights.css"


function ReportLights() {

    const reportLightsPOSTURL = "https://iiksserver.herokuapp.com/lights";

    const [room, setRoom] = React.useState({
        room:"",
        mode:"Report",
        value: "Congratulate",
        pass: "",
        user: false
    }, localStorage.getItem('user')||'', localStorage.getItem('state')||'');



    const handleRoomChange = (e) => {
        const newdata = { room: e.target.value, mode:room.mode, value:room.value, pass:room.pass, user:room.user };
        setRoom(newdata)
    };
    const handleUserChange = (e) => {
        if (localStorage.getItem('state') !== 'true') {
            const newdata = { room: room.room, mode:room.mode, value:room.value, pass:room.pass, user: room.user };
            localStorage.setItem('user',e.target.value)
            setRoom(newdata)
        }
    };
    const handlePassChange = (e) => {
        const newdata = { room: room.room, mode:room.mode, value:room.value, pass: e.target.value, user:room.user };
        setRoom(newdata)
    };
    
    let [message, setMessage] = React.useState();

    function handleSubmit(status){

        let statusMessage;
        if(room.mode === 'Congratulate')statusMessage = 'Congratulation'; else statusMessage = 'Report';
         
        

        console.log(room.user);
        Axios.post(reportLightsPOSTURL,{
            item:room.room,
            status:status,
            pass:room.pass,
            user:localStorage.getItem('user')
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
        
            setTimeout(()=>setMessage(""),5000)
        })
        localStorage.setItem('state', 'true')

        setRoom(prevRoom => ({ room: "", mode:room.mode,value:room.value, pass:room.pass, user:true}));

    
       
    };
    const handlePress = (e) => {
        document.getElementById("submit").click();
        
    };
    const handleCongrats = (e) => {
        e.preventDefault();

        let newdata;
        newdata = { room: room.room, mode:"Congratulate",value:"Report",pass:room.pass, user:room.user  };
        setRoom(newdata)
        console.log(room.mode);
        handleSubmit("Congratulate");
    }
    const handleReport = (e) => {
        e.preventDefault();
        let newdata;
        
        newdata = { room: room.room, mode:"Report",value:"Congratulate", pass:room.pass, user:room.user  };
        
        setRoom(newdata)
        console.log(room.mode);
        handleSubmit("Report");
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
        
            <form id="form" onSubmit={handleSubmit}>
                <input onSubmitEditing={handlePress}
                    value={room.room} onChange={handleRoomChange} pattern="[0-9]*" type="number" placeholder="Room #" id="room"/>
                <div style={{padding:10, paddingLeft:0}}>
                    <input onSubmitEditing={handlePress} 
                        value={localStorage.getItem('user')} onChange={handleUserChange} type="username" placeholder="User" id="user"/>
                    <input onSubmitEditing={handlePress}
                        value={room.pass} onChange={handlePassChange} type="password" placeholder="Password" id="pass"/>
                </div>
                {/* <input id="submit" type="submit"></input> */}
            </form>
            <b>
                <p>
                    <form name="mode" onSubmit={handleCongrats}><input name="modeButton" value='Congratulate' type="submit"></input></form> 
                    <form name="mode" onSubmit={handleReport}><input name="modeButton" value='Report' type="submit"></input></form> 
                </p>
            </b>
            <p style={{margin:20,marginLeft:1}}>{message}</p>
        </div>
    )
}
export default ReportLights;