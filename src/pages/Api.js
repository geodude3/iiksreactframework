import React from "react";
import "../styles/api.css"

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
        <React.Fragment>
            <h1>Server Data</h1>
            <div id="message">Due to server development, server is only accessible on my localhost:3001 port.</div>
            <div>
                Message: {data}
            </div>
            <div>
                Connections: {connect}
            </div>
        </React.Fragment>
    )
}
export default Api;