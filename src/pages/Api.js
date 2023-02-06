import React, { useState } from "react";
import "../styles/api.css"
import "../styles/App.css"
import Axios from "axios"



function Api() {

  const [messages, setMessages] = React.useState(null);
  const [inputForm, setinputForm] = React.useState({
    item:"",
    user:"",
    state:false
  }, localStorage.getItem('user')||'', localStorage.getItem('State')||'')
 


  const handleMessageInputChange = (e)=>{
    const newdata = {item:e.target.value, user: inputForm.user, state:inputForm.state};
    setinputForm(newdata)
  }
  const handleMessageUserChange = (e)=>{
    console.log(localStorage.getItem('State'))
    if (localStorage.getItem('State') !== 'true') {
      const newdata = {item:inputForm.item, user: e.target.value, state: inputForm.state};
      localStorage.setItem('user', e.target.value)
      setinputForm(newdata)
    }
  }


  const handleMessageInputSubmit = (e)=>{
    e.preventDefault();
    if ((localStorage.getItem('user') !== "")&&(inputForm.item !== "")) {
      console.log(inputForm.item)
      Axios.post("https://iiksserver.herokuapp.com/comment",{
        item:inputForm.item,
        user:localStorage.getItem('user')
      })
      .then((message) => {
        console.log(message);
        console.log(message.data.messages);
        
        setMessages(message.data.messages);
        console.log(messages) 
   
      })
      localStorage.setItem('State','true')
      setinputForm({item:"", user:inputForm.user,state:true})
    }
  }
  

  const [connect, setConnect] = React.useState(null);


//refresh messages

  React.useEffect(() => { 

    //might work
    fetch("https://iiksserver.herokuapp.com/api/connections")
      .then((resp) => resp.json())
      .then((data) =>{
        setConnect(data.message)
      })

    fetch("https://iiksserver.herokuapp.com/getmessages")
        .then((res)=>res.json())
        .then((message) => {
          console.log(message.messages);
          setMessages(message.messages);
        });

    // refreh messages and connections
    setInterval(() => {
    
      fetch("https://iiksserver.herokuapp.com/getmessages")
        .then((res)=>res.json())
        .then((message) => {
          console.log(message.messages);
          setMessages(message.messages);
        });

        fetch("https://iiksserver.herokuapp.com/api/connections")
          .then((resp) => resp.json())
          .then((data) =>{
            setConnect(data.message)
        });

  }, 7000);

  }, []);



  // render

    return(
        <div className="body">
            <h1>Server Interface and Chat</h1>
            <div>
                Connections: {connect}
            </div>

            <div id="chat">
              <h2>Website Chat</h2>
              <div className="message">
                Leave your mark! 
                Contribute to the website chat! </div>

              <div>
              <div id="chatbox">
                
                  {
                    messages ? messages.map(listItem=>{
                      return <div className="textDiv"><span className="text">{listItem}</span></div>
                    }) : <p>
                      No messages
                    </p>
                  }
                
              </div>
            </div>
            <form onSubmit={handleMessageInputSubmit}>
                <input onChange={handleMessageInputChange} id="item" placeholder="message" type="text" value={inputForm.item}/>
                <input onChange={handleMessageUserChange} id="user" placeholder="username" type="text" value={localStorage.getItem('user')}/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}
export default Api;

