import React from "react";
import "../styles/api.css"
import "../styles/App.css"
import ApiComponent from "../components/api";
import Form from "./Form";

function Api() {

  React.useEffect(()=>{
    let item = "hi there"

    fetch("https://iiksserver.herokuapp.com/comment",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item})
    })
      .then(data => data.json())
  });

  
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


    return(
        <div className="body">
            <h1>Server Data</h1>
            <div id="message">Server is now up!! Input message not yet working though.</div>
            <div>
                Message: {data}
            </div>
            <div>
                Connections: {connect}
            </div>
            <div>
              <ApiComponent/>
            </div>
        </div>
    )
}
export default Api;