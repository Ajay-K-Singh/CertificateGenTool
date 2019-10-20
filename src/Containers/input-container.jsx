import React, { Component } from 'react';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holdersName: props.name || ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      this.props.setName(this.state.holdersName)
    })
  }

  render() {
    return (
      <div className="input-container">
        <div className="input-div">
          <input type="text" className="input" value={this.state.holdersName} onChange={this.handleChange.bind(this)} name="holdersName"/>
          <button className="btn" disabled={this.state.holdersName.length === 0} onClick={this.props.setPrintState.bind(this, true)}>Print</button>
        </div>
      </div>
    )
  }
}

export default InputContainer;