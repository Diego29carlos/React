import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>J.Diego C.Carlos</h1>
        </p>
        <form>

  <ul>
    Nombre y Apellido: <input type="text" name="name" />
  </ul>
  
  <ul>
    Correo: <input type="text" name="name" />
  </ul>

  <ul>Edad: <input type="text" name="name" />
  </ul>
 
  <ul>
    Telefono: <input type="text" name="name"/>
  </ul>


  </form>
  <input type="Submit" value="Submit" />
      </header>
      
    </div>
  );
 }
  
 class NameForm extends React.Component {
   constructor(props) {
     super(props);
     this.state = {value: ''};
   
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   handleChange(event) {
     this.setState({value: event.target.value});
   }
   
   handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
   }
   
   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <label>
           Name:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     );
   }
  }
 
 export default App;
 