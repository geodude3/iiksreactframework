import React, { useState } from "react";
import "../styles/api.css"
import "../styles/App.css"
import Axios from "axios"



function Api() {

  const [messages, setMessages] = React.useState(null);
  const [messageField, setmessageField] = React.useState({
    item:""
  })

  const handleMessageInputChange = (e)=>{
    const newdata = {...messageField};
    newdata[e.target.id] = e.target.value;
    setmessageField(newdata)
  }


  const handleMessageInputSubmit = (e)=>{
    e.preventDefault();
    console.log(messageField.item)
    Axios.post("https://iiksserver.herokuapp.com/comment",{
      item:messageField.item
    })
    .then((message) => {
      console.log(message);
      console.log(message.data.messages);
      
      setMessages(message.data.messages);
      console.log(messages) 
 
    })
    setmessageField({item:""})
  }
  

  const [connect, setConnect] = React.useState(null);

//og code

  // React.useEffect(() => {
  //   fetch("https://iiksserver.herokuapp.com/api/connections")
  //     .then((resp) => resp.json())
  //     .then((data) =>{
  //       setConnect(data.message)
  //     })
  // }, []);


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

  }, 10000);

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
                <input onChange={handleMessageInputChange} id="item" placeholder="message" type="text" value={messageField.item}/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}
export default Api;

