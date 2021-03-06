import React, {useContext} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo2 from '../components/images/logo2.jpeg';
import "../components/css/Cards.css";
import { AuthContext } from "../context/authContext";
import NavAdmin from "./NavAdmin";
import { salir } from "../services/authService";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";


export default function Navigation() {
  const { user, setAuthUser } = useContext(AuthContext);

  const history = useHistory();

  const logout = () => {
    Swal.fire({
      icon: "danger",
      title: "Desea salir?",
      showConfirmButton: true,
      confirmButtonText: "Si, Salir",
      showCancelButton: true,
    }).then((resultSwal) => {
      if (resultSwal.isDismissed === true) {
        //si es que doy click a cancelar no haga nada
        return;
      }
      salir().then(() => {
        setAuthUser(null);
        Swal.fire({
          icon: "success",
          title: "Se deslogueo exitosamente",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          history.push("/");
        });
      });
    });
    //---------------------
  };

  let seleccionarNav = () => {
    if (user !== null) {
      return <NavAdmin logout={logout} />;
    }
  };
  
  
  
  return (
    
    <div id="p5-4rem">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top"> 
        <Navbar.Brand href="http://localhost:3000/">
           <img className="rounded " id="logo_navigation" 
             alt=""
             /*width={30}
             heigth={30} */
             src={logo2}
             className="d-inline-block align-top"
            />  
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link >
                <Link to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
            {seleccionarNav()}

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
