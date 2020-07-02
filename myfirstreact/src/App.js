import React, {Component} from 'react';
import Table from './table';
import ContactForm from './contactForm';



//This is a Class Component

class App extends Component { 



  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],

  }

  removeCharacter = (index) => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i)=>{
        return i !== index
      })
    })
  }

  render(){

    const {characters} = this.state

    return (
      <div className="App">
        
        <div className="jumbotron jumbotron-fluid" >
          <div className="container">
            <h1 className="display-4">Contact form</h1>
            <p className="lead">Want to know more information or have a particular question for us? Drop us a contact!</p>
          </div>
        </div>

        <section>
          <ContactForm />
        </section>

        <section>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </section>


      </div>
    );
  }
}

export default App;
