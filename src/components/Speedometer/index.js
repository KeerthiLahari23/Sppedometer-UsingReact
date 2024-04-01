// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  brakeBtn = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  accelerateBtn = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="speedometer-container">
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            className="image"
            alt="speedometer"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="note">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="Accelerate-btn"
              type="button"
              onClick={this.accelerateBtn}
            >
              Accelerate
            </button>
            <button className="brake-btn" type="button" onClick={this.brakeBtn}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
