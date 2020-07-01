import React, {Component} from 'react';

class App extends Component { 
  render(){
    return (
      <div className="App">
        <h1>Learning React</h1>

        <div class="jumbotron jumbotron-fluid" >
          <div class="container">
            <h1 class="display-4">Contact form</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>

        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default App;
