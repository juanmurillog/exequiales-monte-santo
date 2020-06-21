import React from 'react'
import Header from '../Components/Home/header'
import Footer from '../Components/Home/footer'
import Portada from '../Components/QuienesSomos/portada'
import { Row, Col, Container } from "react-bootstrap";
  function QuienesSomos(){

    return(
          <div className="container contain">
          <Header/>
          <section>
            <Portada/>
          </section>
          <Row className="container-row d-flex align-items-center" style={{backgroundColor: "var(--pdf2)" , color: "white"}}>
          <Col className="container-col" md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
            </p>
          </Col>       
        </Row>
          
          </div>
          
    )
  }

  export default QuienesSomos;