import React from 'react';
import TextBox from './components/TextBox.js';
import SelectBox from './components/SelectBox';

export default class ContactForm extends React.Component{
    state = {
        firstname: '',
        lastname: '',
        age: 18,
        email: '',
        country: 'Singapore',
        postalcode: null,
        haveSubmitted: false
    }

    constructor(props){
        super(props); //tell the parent constructor about the props
        this.handleChange=this.handleChange.bind(this);
        this.confirm = this.confirm.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    reset(event){
        event.preventDefault();
        this.setState({
            firstname: '',
            lastname: '',
            age: 18,
            email: '',
            country: 'Singapore',
            postalcode: 0,
            haveSubmitted: false
        })
    }

    confirm(event){
        event.preventDefault();
        this.setState({
            haveSubmitted: true
        })
    }

    displaySummary(){

        return(
            <div> 
                <ul>
                    <li>Name:{this.state.lastname} {this.state.firstname}</li>
                    <li>Age:{this.state.age}</li>
                    <li>Email: {this.state.email}</li>
                    <li>Country: {this.state.country}</li>
                    <li>Postal Code: {this.state.postalcode}</li>
                </ul>
            </div>
        )
        
    }

    render(){
        return(
            
            <form>
                <h5>Contact Form:</h5>
                    <TextBox type='text' title="First Name: " name='firstname' maxLength="25" passedfunction={this.handleChange} value={this.state.firstname}/>
                    <TextBox type='text' title="Last Name: " name='lastname' maxLength="25" passedfunction={this.handleChange} value={this.state.lastname}/>
                    <SelectBox name="age" title="Age: " passedfunction={this.handleChange} value={this.state.age} 
                        option={[
                        { value: '18', label: '18' },
                        { value: '19', label: '19' },
                        { value: '20', label: '20' },
                        { value: '21', label: '21' },
                        { value: '22', label: '22' },
                        { value: '23', label: '23' },
                        { value: '24', label: '24' },
                        { value: '25', label: '25' },
                    ]}/>
                    <TextBox type='email' title="Email: " name='email' maxLength="25" passedfunction={this.handleChange} value={this.state.email}/>
                    <SelectBox name="country" title="Country: " passedfunction={this.handleChange} value={this.state.country} 
                        option={[
                        { value: 'Singapore', label: 'Singapore' },
                        { value: 'Malaysia', label: 'Malaysia' },
                        { value: 'Thailand', label: 'Thailand' },
                    ]}/>
                <TextBox type="number" title="Postal Code: " name="postalcode" max="99999999" passedfunction={this.handleChange} value={this.state.postalcode}/>
                <button className="btn btn-primary m-2" onClick={this.reset}>Reset</button>
                <button className="btn btn-primary m-2" onClick={this.confirm}>Submit</button>
                
                { 
               this.state.haveSubmitted === true ?  // if has image
               <p>{this.displaySummary()} </p>      // return My image tag 
               :
               <p></p>       // otherwise return other element  

             }
                
            </form>
        )
    }

}