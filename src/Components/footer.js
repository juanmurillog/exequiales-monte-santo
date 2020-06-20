import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Row, Col, Container } from "react-bootstrap";
import './footer.css'

const FooterPagePro = () => {
  return (
    <footer color="mdb-color" className="font-small pt-4 mt-4">
      <Container className="text-center text-md-left contain-footer" >
        <Row className=" container-row text-center text-md-left mt-3 pb-3">
          <Col md="3" lg="3" xl="3" className=" container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="2" lg="2" xl="2" className="container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <ul>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
            </ul>
            
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="3" lg="2" xl="2" className="container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <ul>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
            </ul>
          </Col>
          <hr className="w-100 clearfix d-md-none" />
          <Col md="4" lg="3" xl="3" className="container-col mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <ul>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
              <li> <a href="#!">MDBootstrap</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="container-row d-flex align-items-center">
          <Col className="container-col" md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
          </Col>       
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPagePro;