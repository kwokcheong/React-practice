import React from 'react';

export default class ContactForm extends React.Component{
    state = {
        name: '',
        email: '',
        number:0,
        date: ''
    }

    constructor(props){
        super(props); //tell the parent constructor about the props
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <div>
                <div> 
                    <label>Name:</label>
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div> 
                    <label>Email:</label>
                    <input type="text" name='email' onChange={this.handleChange} value={this.state.email}/>
                </div>
            </div>
        )
    }

}