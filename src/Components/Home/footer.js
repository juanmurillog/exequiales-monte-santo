import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Row, Col, Container } from "react-bootstrap";
import './footer.css'
import  {FontAwesomeIcon}  from  '@fortawesome/react-fontawesome' ;
import {faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterPagePro = () => {
  return (
    <footer color="mdb-color" className="font-small ">
      <Container className="text-center text-md-left contain-footer" >
        <Row className=" container-row text-center text-md-left mt-3 pb-3">
          <Col md="3" lg="3" xl="3" className=" container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Monte Santo
            </h6>
            <p>
             Con ustedes paso a paso
             
            </p>
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="2" lg="2" xl="2" className="container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <ul>
              <li> <a href="#!">Coronas</a></li>
              <li> <a href="#!">Pedestales</a></li>
              <li> <a href="#!">Coros</a></li>
            
            </ul>
            
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="3" lg="2" xl="2" className="container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
            Enlaces Utiles
            </h6>
            <ul>
              <li> Registrate</li>
              <li> Afiliate con nosotros</li>
              <li> Contactanos</li>
              <li> Quienes somos</li>
             
            </ul>
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="4" lg="3" xl="3" className="container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <ul>
              <li> 
              <FontAwesomeIcon  className=" mr-3" icon={faEnvelope} />jmontesanto.hg@hotmail.com
              </li>
              <li> 
              <FontAwesomeIcon  className="mr-3" icon={faMapMarkerAlt} />Calle 32 N° 2a-31 B/Departamental Ibagué</li>
              <li>
              <FontAwesomeIcon  className=" mr-3" icon={faWhatsapp}  /> (57) 312 485 97 02</li>
              
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="container-row d-flex align-items-center">
          <Col className="container-col" md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
            </p>
          </Col>       
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPagePro;