import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ContentComponent from '../components/ContentComponent'
import TestComponent from '../components/TestComponent'

export default class Layout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <TestComponent/>
      </div>
    )
  }
}