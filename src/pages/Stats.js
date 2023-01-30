import React, { useState } from "react";
import "../styles/App.css"
import Axios from "axios"

function Stats() {


    const [stats, setStats] = React.useState({
        emails:0,
        rooms:[],
        addresses:[], 
        type:[],
        reporters:[],
        dailyReports:[],
        stats: []
    })

    React.useEffect(()=>{
        fetch("https://iiksserver.herokuapp.com/api/emails")
        .then((res)=>res.json()) 
        .then((data) => {
            setStats({emails:data.emails, rooms:data.rooms, addresses:data.addresses,reporters:data.reporters, dailyReports:data.dailyReports, type:data.type, stats:stats.stats})
        })
        setInterval(() => {
            fetch("https://iiksserver.herokuapp.com/api/emails")
            .then((res)=>res.json())
            .then((data) => {
                setStats({emails:data.emails, rooms:data.rooms, addresses:data.addresses,reporters:data.reporters, dailyReports:data.dailyReports, type:data.type, stats:stats.stats})
            })
        }, 3000);
    },[])



    function setData() {
        let Data = [];

        for (let id = 0; id < stats.emails; id++) {
            console.log(id," rooms ",stats.rooms[id])
            console.log(id," type ",stats.type[id])
            console.log(id," addresses ",stats.addresses[id])
            console.log(id," reporter ",stats.reporters[id])
            Data[id] = `room ${stats.rooms[id]}`
            console.log(Data)
        }
        console.log(Data);
        
        setStats({
            emails:stats.emails,
            rooms:stats.rooms,
            addresses:stats.addresses,
            type:stats.type,
            reporters:stats.reporters,
            dailyReports:stats.dailyReports,
            stats:Data
        })
        
        return Data;
    }
    setData();


    return(
        <div className="body">
            <h1>Welcome to the Stats website</h1>
                <p>Emails: <i >{stats.emails}</i></p> 
                <div>
                    <p >Reports:</p>
                    <ol>
                        {stats.stats.map(dt => {
                            return `<li>${dt}</li>`
                        })}
                    </ol>
                </div>
                <div>
                    <ol>
                        {stats ? stats.stats.map(dt => {
                            return `<li>Hi</li>`
                        }):`No stats`}
                    </ol>
                </div>
            <p>Daily reports: <i ><ol>{stats.dailyReports ? stats.dailyReports.map(rp =>{return `<li>${rp}</li>`}) : "No reports" }</ol></i></p>
        </div>
    )
}
export default Stats;