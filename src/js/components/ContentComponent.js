import React from 'react'
import { Form, Input, Button } from 'reactstrap'

export default class HeaderContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      title: 'title',
      count: 0
    }
  }
  clickHandler() {
    console.log('Button clicked!')
    this.countUp()
  }
  changeHandler(e) {
    let val = e.target.value.trim()
    console.log(`Value: ${val}`)
    this.setState({
      title: val
    })
  }
  keyDownHandler(e) {
    // 13, 27
    e.which === 27 ? this.setState({title: undefined, count: 0}) : {}
    e.which === 13 ? this.countUp() : {}
  }
  countUp() {
    let { count } = this.state
    count++
    this.setState({
      count
    })
  }
  render() {
    return (
      <div class="container">
        <h1>{this.state.title}</h1>
        <div>
          <Input onChange={(e) => this.changeHandler(e)} onKeyDown={(e) => this.keyDownHandler(e)}type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          <Button onClick={() => this.clickHandler()}>{this.state.count} Click</Button>
        </div>
      </div>
    )
  }
}