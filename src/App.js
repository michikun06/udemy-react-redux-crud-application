import React, { Component } from 'react';

const App = () => (<Counter />)

class Counter extends Component {

  // "constructor"は初期化処理の際に実行されるメソッド
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    if (this.state.count === 0) {
      console.log('0以下は表示できません')
      return
    }
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
