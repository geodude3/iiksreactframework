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
  }
  

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("https://iiksserver.herokuapp.com/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  const [connect, setConnect] = React.useState(null);


  React.useEffect(() => {
    fetch("https://iiksserver.herokuapp.com/api/connections")
      .then((resp) => resp.json())
      .then((connect) => setConnect(connect.message));
  }, []);

  const fake = ['1','2','3','4','5'];



    return(
        <div className="body">
            <h1>Server Data</h1>
            <div className="message">Server is now up!!</div>
            <div className="message">
              Leave your mark! 
              Contribute to the website chat! </div>
            {/* <div>
                Message: {data}
            </div> */}
            <div>
                Connections: {connect}
            </div>
            {/* <div>
                Data: {data2}
            </div> */}

            <div>
            <div>
              <ul>
                
                {
                  messages ? messages.map(listItem=>{
                    return <li>{listItem}</li>
                  }) : <p>
                    No messages
                  </p>
                }
              </ul>
              
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

