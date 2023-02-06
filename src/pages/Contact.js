import React from "react";
import "../styles/App.css"

import Axios from "axios";

function Contact() {

    const [feedback, setFeedback] = React.useState({
        message:"",
        response:""
    })

    const handleFeedbackInputChange = (e) => {
        const newdata = {message: e.target.value, response:feedback.response};
        setFeedback(newdata);
    }

    const handleFeedbackInputSubmit = (e) => {
       if (feedback.message !== "") {
         e.preventDefault();
 
         Axios.post("https://iiksserver.herokuapp.com/feedback", {
             feedback: feedback.message
         })
         .then((response)=>{
             console.log(response)
             console.log(response.data.message)
             setFeedback({message: "", response:response.data.message})
         })
         //clear server respoonse message after 7 seconds.
         setTimeout(() => {
             setFeedback({message: "", response:""})
         }, 7000);
         
       }
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
            <form onSubmit={handleFeedbackInputSubmit}>
                <input onChange={handleFeedbackInputChange} type="text" value={feedback.message}></input>
                <input type="submit"></input>
            </form>
            {feedback.response}
        </div>
    )
}
export default Contact;