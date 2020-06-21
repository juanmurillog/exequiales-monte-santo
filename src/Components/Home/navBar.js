import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './navBar.css'
import {Navbar,Nav,Button,Form} from 'react-bootstrap'
import ModalIngreso from './modal.js'
//we create component navBar 



function HomeNavBar(){

  const [modalShow, setModalShow] = React.useState(false);
  return(
    <Navbar id="default-navbar" expand="lg">
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="#link">Obituarios</Nav.Link>
        <Nav.Link href="#link">Sedes</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <Nav.Link href="/quienesSomos">Quienes somos</Nav.Link>
        
        
      </Nav>
      <Form inline className="form-nav">
        <Button className ="mx-sm-2" varian="success" id="btn-afiliarse">Afiliate</Button>
        <Button className="mx-sm-2 " variant="success" id="btn-ingresar"  onClick={() => setModalShow(true)} >Ingresar</Button>
      </Form>
    </Navbar.Collapse>
    <ModalIngreso
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Navbar>
    );
      
}

    

    

    export default HomeNavBar;
          
 
