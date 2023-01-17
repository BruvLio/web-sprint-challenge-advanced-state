import React from 'react'
import { connect } from 'react-redux'
import { moveCounterClockwise, moveClockwise } from '../state/action-creators'

const Wheel = (props) => {

  // const handleMoveCounterClockwise = () => {
  //   console.log(props.wheel)
  //   props.moveCounterClockwise()
  // }

  return (
    <div id="wrapper">
      <div id="wheel">
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div> */}
        <div className={`cog ${props.wheel === 0 ? 'active' : null} `} style={{ "--i": 0 }}>{props.wheel === 0 ? 'B' : null}</div>
        <div className={`cog ${props.wheel === 1 ? 'active' : null} `} style={{ "--i": 1 }}>{props.wheel === 1 ? 'B' : null}</div>
        <div className={`cog ${props.wheel === 2 ? 'active' : null} `} style={{ "--i": 2 }}>{props.wheel === 2 ? 'B' : null}</div>
        <div className={`cog ${props.wheel === 3 ? 'active' : null} `} style={{ "--i": 3 }}>{props.wheel === 3 ? 'B' : null}</div>
        <div className={`cog ${props.wheel === 4 ? 'active' : null} `} style={{ "--i": 4 }}>{props.wheel === 4 ? 'B' : null}</div>
        <div className={`cog ${props.wheel === 5 ? 'active' : null} `} style={{ "--i": 5 }}>{props.wheel === 5 ? 'B' : null}</div>
        {/* <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}

      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={props.moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={props.moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
     wheel: state.wheel
  };
}
export default connect(mapStateToProps, { moveCounterClockwise, moveClockwise })(Wheel);