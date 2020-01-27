import React from 'react';
import logo from './logo.svg';
import './App.css';
 
 
function App() {
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         <h1>J.Diego Carlos</h1>
       </p>
       <form>
 <label>
   Nombre : <input type="text" name="name" />
 </label>
 <input type="Submit" value="Submit" />
 </form>
        <a
         className="App-link"
         href="https://app.slack.com/client/TPFSKAG8K/CSKP8MY65"
         target="_blank"
         rel="noopener noreferrer"
       >
      <select>
 
      <option value="grapefruit">Slack</option>
      <option value="lime">Usuario</option>
      <option selected value="coconut">Contacto</option>
      <option value="mango">Email</option>
 
      </select>
         </a>
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
  
 