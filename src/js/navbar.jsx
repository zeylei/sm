import React, { Component } from "react";
import { Col, Nav, Navbar, NavItem, NavbarBrand, Row, Container, Card, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";

class GNavbar extends Component {
  render() {
    return (
      <Card className="navbar-simple">
        <CardBody>
          <NavLink exact className="btn btn-outline-primary btn-sm" activeClassName="disabled" to="/" >打字</NavLink> {" "}
          <NavLink exact className="btn btn-outline-primary btn-sm" activeClassName="disabled" to="/grade" >成绩</NavLink>{" "}
          <NavLink exact className="btn btn-outline-primary btn-sm" activeClassName="disabled" to="/config" >设置</NavLink>{" "}
          <NavLink exact className="btn btn-outline-primary btn-sm" activeClassName="disabled" to="/help" >关于</NavLink>{" "}
        </CardBody>
      </Card>
    );
    return null;
    return (
      <Navbar color="primary" dark expand="xs" className="navbar-simple">
        <NavLink exact className="navbar-brand" activeClassName="active" to="/">
          打字
          </NavLink>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink exact className="nav-link" activeClassName="active" to="/grade">成绩</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact className="nav-link" activeClassName="active" to="/config" >设置</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default GNavbar;
