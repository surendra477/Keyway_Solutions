import React from 'react';
import {Navbar,Nav} from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Bala stationery store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">stationery</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" onchange = {this.onchange}className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavBar;