import React, { Component } from 'react';


class ApiComponent extends Component {
    state = { 
        value: " "
     } 
    

    handleSubmit = (event)=>{
       
        console.log("Form submitted: ", this.state.value);
        React.useEffect(()=>{
            let item = this.state.value;
        
            fetch("http://localhost3001/comment/",{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({item})
            })
                .then(data => data.json())
        });
        event.preventDefault();
        
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Input message: <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
 
export default ApiComponent;