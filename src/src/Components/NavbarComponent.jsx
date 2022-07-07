import React from "react";
import { Navbar,  Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../Redux/Actions/actions";

const NavbarComponent = () => {

    const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg="primary" variant="dark" className="">
        <div className="w-50 d-flex m-auto justify-content-between">
          <Navbar.Brand href="#home">Open Wheater</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/perfil">Perfil</Nav.Link>
          </Nav>
          <Button variant="light" onClick={()=> dispatch(logoutAsync())}>Logout</Button>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
