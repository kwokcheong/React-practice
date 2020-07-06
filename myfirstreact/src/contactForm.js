import React from 'react';

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
                <div> 
                    <label style={{margin: "10px"}}>First Name: </label>
                    <input type='text' name='firstname' maxLength="25" onChange={this.handleChange} value={this.state.firstname}/>
                </div>
                <div> 
                    <label style={{margin: "10px"}}>Last Name: </label>
                    <input type='text' name='lastname' maxLength="25" onChange={this.handleChange} value={this.state.lastname}/>
                </div>
                <div>
                    <label style={{margin: "10px", marginRight:"55px"}}>Age: </label>
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
                    <label style={{margin: "10px", marginRight:"45px"}}>Email:</label>
                    <input type="text" name='email' maxLength="25" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div>
                    <label style={{margin: "10px", marginRight:"26px"}}>Country: </label>
                    <select name="country" onChange={this.handleChange} value={this.state.country}>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Thailand">Thailand</option>
                    </select>
                </div>
                <div> 
                    <label style={{margin: "10px"}}>Postal Code: </label>
                    <input type="number" name='postalcode' max="99999999" onChange={this.handleChange} value={this.state.postalcode}/>
                </div>
                <button class="btn btn-primary m-2" onClick={this.reset}>Reset</button>
                <button class="btn btn-primary m-2" onClick={this.confirm}>Submit</button>
                
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