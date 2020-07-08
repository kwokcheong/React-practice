import React, {Component} from 'react';

//This is a higher order component
const UpdatedComponent = (OriginalComponent) =>{
    class NewComponent extends Component {
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
            return <OriginalComponent 
            handleChange={this.handleChange} 
            reset={this.reset} 
            confirm={this.confirm} 
            displaySummary={this.displaySummary}
            state={this.state}
            {...this.props}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent;