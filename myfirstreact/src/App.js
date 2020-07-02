import React, {Component} from 'react';
import Table from './table';

//This is a Class Component

class App extends Component { 
  render(){
    return (
      <div className="App">
        
        <div className="jumbotron jumbotron-fluid" >
          <div className="container">
            <h1 className="display-4">Contact form</h1>
            <p className="lead">Want to know more information or have a particular question for us? Drop us a contact!</p>
          </div>
        </div>

        <button type="button" className="btn btn-primary">Primary</button>


        <section>
          <Table />
        </section>

      </div>
    );
  }
}

export default App;
