import React from "react";
import "../styles/api.css"
import "../styles/App.css"


function Api() {
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  const [connect, setConnect] = React.useState(null);


  React.useEffect(() => {
    fetch("http://localhost:3001/api/connections")
      .then((resp) => resp.json())
      .then((connect) => setConnect(connect.message));
  }, []);

    return(
        <div className="body">
            <h1>Server Data</h1>
            <div id="message">Due to server development, server is only accessible on my localhost:3001 port.</div>
            <div>
                Message: {data}
            </div>
            <div>
                Connections: {connect}
            </div>
        </div>
    )
}
export default Api;