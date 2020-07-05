import React from 'react';

export default class ContactForm extends React.Component{
    state = {
        firstname: '',
        lastname: '',
        age: null,
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
            age: null,
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
                <div> 
                    <label>First Name: </label>
                    <input type='text' name='firstname' maxLength="25" onChange={this.handleChange} value={this.state.firstname}/>
                </div>
                <div> 
                    <label>Last Name: </label>
                    <input type='text' name='lastname' maxLength="25" onChange={this.handleChange} value={this.state.lastname}/>
                </div>
                <div>
                    <label>Age: </label>
                    <select name="age" onChange={this.handleChange} value={this.state.age}>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                    </select>
                </div>
                <div> 
                    <label>Email:</label>
                    <input type="text" name='email' maxLength="25" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div>
                    <label>Country: </label>
                    <select name="country" onChange={this.handleChange} value={this.state.country}>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Thailand">Thailand</option>
                    </select>
                </div>
                <div> 
                    <label>Postal Code: </label>
                    <input type="number" name='postalcode' max="99999999" onChange={this.handleChange} value={this.state.postalcode}/>
                </div>
                <button class="btn btn-primary m-2" onClick={this.reset}>Reset</button>
                <button class="btn btn-primary m-2" onClick={this.confirm}>Submit</button>

                {this.displaySummary()}
            </form>
        )
    }

}