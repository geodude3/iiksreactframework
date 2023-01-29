import React from "react";
import "../styles/App.css"

import Axios from "axios";

function Contact() {

    const [feedback, setFeedback] = React.useState({
        message:"",
        response:""
    })

    const handleChange = (e) => {
        const newdata = {message: e.target.value, response:feedback.response};
        setFeedback(newdata);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post("https://iiksserver.herokuapp.com/feedback", {
            feedback: feedback.message
        })
        .then((response)=>{
            console.log(response)
            console.log(response.data.message)
            setFeedback({message: "", response:response.data.message})
        })
        setTimeout(() => {
            setFeedback({message: "", response:""})
        }, 7000);
        
    }

    return(
        <div className="body">
            <div>
                <h1>Contact Us</h1>
            </div>
            Email us @ ihsan.salari@gmail.com
            <div>
                Or input feedback here:
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={feedback.message}></input>
                <input type="submit"></input>
            </form>
            {feedback.response}
        </div>
    )
}
export default Contact;