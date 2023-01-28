import React, { useState } from "react";
import "../styles/api.css"
import "../styles/App.css"
import Axios from "axios"



function Api() {

  const [data2, setData2] = React.useState(null);
  const [messages, setMessages] = React.useState(null);

  const [dataInput, setDataInput] = React.useState({
    item:""
  })

  const handle = (e)=>{
    const newdata = {...dataInput};
    newdata[e.target.id] = e.target.value;
    setDataInput(newdata)
    //console.log(newdata);
  }

  const url = "https://iiksserver.herokuapp.com/comment"
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(dataInput.item)
    Axios.post(url,{
      item:dataInput.item
    })
    .then((message) => {
      console.log(message);
      console.log(message.data.messages);
      
      
      setMessages(message.data.messages);
      console.log(messages) 
 
    })
    setDataInput({item:""})
  }
  

  const [data, setData] = React.useState(null);


setInterval(() => {
    Axios.get("https://iiksserver.herokuapp.com/getmessages")
      .then((message) => setMessages(message.data.messages));
}, 10000);

  const [connect, setConnect] = React.useState(null);


  React.useEffect(() => {
    fetch("https://iiksserver.herokuapp.com/api/connections")
      .then((resp) => resp.json())
      .then((connect) => setConnect(connect.message));
  }, []);


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
            <form onSubmit={handleSubmit}>
                <input onChange={handle} id="item" placeholder="message" type="text" value={dataInput.item}/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}
export default Api;

