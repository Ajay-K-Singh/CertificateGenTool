import React from 'react';
import InputContainer from '../src/Containers/input-container';
import './App.css';
import PrintContainer from './Containers/print-container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "", 
      print: false
    };
    this.componentRef = React.createRef();
  }

  setName(value) {
    this.setState({
      name: value
    })
  }

  setPrintState(value) {
    if (this.state.name.length > 0) {
      this.setState({
        print: value
      })
    }
  }

  resetApp() {
    this.setState({
      name: "",
      print: false
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.print && <InputContainer setPrintState={this.setPrintState.bind(this)}  setName={this.setName.bind(this)} name={this.state.name}/>}
        {this.state.print && <PrintContainer name={this.state.name} resetApp={this.resetApp.bind(this)} />} 
      </div>
    );
  }
}

export default App;
