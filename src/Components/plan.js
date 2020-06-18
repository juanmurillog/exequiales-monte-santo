import React from 'react'
import Card from 'react-bootstrap/Card'
import './plan.css'

function Plan(props){
     
    return(

     <>
  <Card className="card">
    <Card.Img variant="top" src={props.imagen} className="rounded-circle align-self-center"/>
    <Card.Body>
    <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</>
    );
}

export default Plan;