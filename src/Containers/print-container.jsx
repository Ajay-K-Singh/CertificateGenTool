import React, { Component } from 'react'
import certificate from '../certificate.svg';
import ReactToPrint from 'react-to-print';

class PrintContainer extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    return (
      <div className="print-container">
        <div className="certificate-container" ref={this.componentRef}>
          <img className="certificate" src={certificate} alt="certificate-svg"/>
          <svg className="certificate-holder-name">
            <rect x="0" y="0" width="100%" fillOpacity="0" height="100%" fill="white"/>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{this.props.name}</text>
          </svg>
        </div>
        <div className="btn-container">
          <ReactToPrint
            trigger={() => <button className="btn">Print this out!</button>}
            content={() => this.componentRef.current}/>
          <button className="btn" onClick={this.props.resetApp}>Reset</button>
        </div>
      </div>
    )
  }
}

export default PrintContainer;