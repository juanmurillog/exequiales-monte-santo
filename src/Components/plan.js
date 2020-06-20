import React from 'react'
import './plan.css'
//componente cards de los planes 

import {Card,Button,Badge,Accordion, ButtonToolbar} from 'react-bootstrap'

function Plan(props){
     
    return(
    <>
   
    
  <Card className="card">
  <Card.Img variant="top" src={props.imagen} className="rounded-circle align-self-center"/>
  <Card.Body>
  <Card.Title style={{color: "#2d3f4b"}}>{props.name}</Card.Title>

  {/* 
        Acordeon de la informacion de cada plan 
  */}
  
    <Accordion >
     <Card id="info-card">
       <Card.Footer>
         <Accordion.Toggle as={Button} variant="info" eventKey="0">
           Mas informacion
        </Accordion.Toggle>
       </Card.Footer>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <ul id="list-plans">
            <h4>{props.personas}</h4>
            <li>{props.transfer}</li>
            <li> {props.misaE}</li>
            <li> {props.ramo}</li>
            <li> {props.misaA}</li>
            <li> {props.cremacion}</li>
       </ul>
     </Card.Body>
   </Accordion.Collapse>
   </Card>
   </Accordion>

    
  </Card.Body>
  </Card>
    
</>
   
   
   
   
    );
}

export default Plan;