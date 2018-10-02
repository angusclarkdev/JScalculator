import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class App extends Component {
  renderNumbers () {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    return numbers.map((i, index) => {
      return (
        <button key={index} styleName='number' value={i} onClick={this.handleNumberClick.bind(this)}> {i} </button>
      )
    })
  }

  renderScreen () {
    return (
      <div styleName='screen'>
        0
      </div>
    )
  }

  handleNumberClick (e) {
    console.info(e.target.value)
  }

  render () {
    return (
      <div styleName='container'>
        <div styleName='number-grid'>
          {this.renderScreen()}
          {this.renderNumbers()}
          <div styleName='clear'> AC </div>
          <div styleName='sum'> = </div>
        </div>
        <div styleName='actions-grid'>
          <div styleName='addition'> + </div>
          <div styleName='minus'> - </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
