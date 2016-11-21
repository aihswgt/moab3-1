import React from 'react'

class TestComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'initial Text',
      count: 0
    }
  }
  changeText() {
    this.setState({
      text: 'new Text',
      count: this.state.count + 1
    })
    console.log(this.state.text)
  }
  render() {
    return (
      <div>
        <h1>{this.state.text + this.state.count}</h1>
        <button onClick={() => this.changeText()}>change Text</button>
      </div>
    )
  }
}

export default TestComponent