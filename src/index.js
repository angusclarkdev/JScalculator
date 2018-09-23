import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class App extends Component {
  renderNumbers () {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return numbers.map(i => {
      return (
        <button styleName='number' onClick={this.handleNumberClick}> {i} </button>
      )
    })
  }

  handleNumberClick = (e) => {
    console.info(e.target)
  }
 
  render () {
    return (
      <div styleName='container'>
        {this.renderNumbers()}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
