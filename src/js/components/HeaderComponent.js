import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class HeaderContainer extends React.Component {
  constructor() {
    super();

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler className="float-sm-right hidden-lg-up collapsed" onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://reactstrap.github.io/components/navbar/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Settings</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}