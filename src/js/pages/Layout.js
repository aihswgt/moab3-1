import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ContentComponent from '../components/ContentComponent'

export default class Layout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
        <ContentComponent/>
      </div>
    )
  }
}