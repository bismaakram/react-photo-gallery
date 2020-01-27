import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import SearchForm from "./SearchForm";

export default class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Gallery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/beaches">Beaches</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mountains">Mountains</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/lakes">Lakes</NavLink>
              </NavItem>
            </Nav>
            <SearchForm handleSearch={this.props.handleSearch} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
