import { render } from "@testing-library/react";
import React, { Component } from "react";
import PropTypes from 'prop-types';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1})
    //setStateを使用するとrender()が実行され、再描画される
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
    //setStateを使用しなかった場合、render()が実行されず状態が変わらない
  }

  render() {
    return (
      <React.Fragment>
        <div>counter: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
