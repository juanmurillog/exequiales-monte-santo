import React from 'react'
import './portada.css'
import { Container } from 'react-bootstrap';


function Portada(){

    return(

        <Container fluid id="contain-portada">
           
            <img src="/Images/QuienesSomos/portada.jpg"></img>
            <img src="/Images/QuienesSomos/mision.jpg"></img>
            <img src="/Images/QuienesSomos/fortalezas.jpg"></img>
            <img src="/Images/QuienesSomos/politicas.jpg"></img>
            
        </Container>
            
        

    )
}

export default Portada ;