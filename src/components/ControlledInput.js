import React, { Component } from 'react';

class ControlledInput extends Component{

    state = {
        firstName: '',
        lastName: ' ',
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        console.log(this.state.firstName, this.state.lastName)
        return(
            <form>
                <label> First Name  </label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder={this.state.firstName} />

                <label>  Last Name </label>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}  />
                <input type="submit" />
            </form>
        )
    }


}

export default ControlledInput
