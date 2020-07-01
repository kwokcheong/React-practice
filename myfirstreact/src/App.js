import React, {Component} from 'react';

class App extends Component { 
  render(){
    return (
      <div className="App">
        <h1>Learning React</h1>

        <div className="jumbotron jumbotron-fluid" >
          <div className="container">
            <h1 className="display-4">Contact form</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>

        <button type="button" className="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default App;
