My First React js practice

### Following Tania Rascia Notes on React

https://www.taniarascia.com/getting-started-with-react/

#### 1/7/20

1. Basic Set up of react using `npm install -g create-react-app` 
2. Create app called myfirstreact using `npx create-react-app`
3. `cd myfirstreact` && `npm start`
4. within src folder, located App.js and added in my HTML code
```
  class App extends components{
    render(){
      return( 
        //put html code here
         );
        }
       }
   export default app;   //Important!
   ```
5. Understanding DOM.
   ```
   within Index.js
   
   import React from 'react';
   import ReactDOM from 'react-dom';
   
   const myfirstelement = <H1> Hello world </h1>
   
   ReactDOM.render( myfirstelement, document.getElementById('Root')); 
   
   within index.html
   
   ...
      <div id="Root"> Hello world </div>
   ...
  ```
