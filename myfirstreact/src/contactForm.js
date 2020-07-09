import React from 'react';
import TextBox from './components/TextBox.js';
import SelectBox from './components/SelectBox';
import UpdatedComponent from './components/withContactForm';
import ButtonBox from './components/ButtonBox';

class ContactForm extends React.Component{
    render(){
        const {handleChange, reset, confirm, state} = this.props;
        return(
            <form>
                <h5>Contact Form:</h5>
                    <TextBox type='text' title="First Name: " name='firstname' maxLength="25" passedfunction={handleChange} value={state.firstname}/>
                    <TextBox type='text' title="Last Name: " name='lastname' maxLength="25" passedfunction={handleChange} value={state.lastname}/>
                    <SelectBox name="age" title="Age: " passedfunction={handleChange} value={state.age} 
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
                    <TextBox type='email' title="Email: " name='email' maxLength="25" passedfunction={handleChange} value={state.email}/>
                    <SelectBox name="country" title="Country: " passedfunction={handleChange} value={state.country} 
                        option={[
                        { value: 'Singapore', label: 'Singapore' },
                        { value: 'Malaysia', label: 'Malaysia' },
                        { value: 'Thailand', label: 'Thailand' },
                    ]}/>
                <TextBox type="number" title="Postal Code: " name="postalcode" max="99999999" passedfunction={handleChange} value={state.postalcode}/>
                <ButtonBox click={reset} title="Reset"/>
                <ButtonBox click={confirm} title="Submit"/>

                { 
                state.haveSubmitted === true ?  // if has data
                <div> 
                <ul>
                    <li>Name:{state.lastname} {state.firstname}</li>
                    <li>Age:{state.age}</li>
                    <li>Email: {state.email}</li>
                    <li>Country: {state.country}</li>
                    <li>Postal Code: {state.postalcode}</li>
                </ul>
            </div>     // return My data
               :
               <p></p>       // otherwise return other element  
             }
                
            </form>
        )
    }

}

export default UpdatedComponent(ContactForm);