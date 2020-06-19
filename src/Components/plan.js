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
    <Card.Title>{props.name}</Card.Title>
    <Accordion >
    <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="info" eventKey="0">
        Mas informacion
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Card.Body>{props.info}</Card.Body>
    </Accordion.Collapse>
  </Card>
   </Accordion>
    </Card.Body>
    </Card>
    
</>
   
   
   
   
    );
}

export default Plan;