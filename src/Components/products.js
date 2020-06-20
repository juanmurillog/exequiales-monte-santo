import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Products(props){


    return(
     <Card>
      <Card.Img variant="top" src={props.imagen} style={{height:"550px"}}/>
      <Card.Body>
    <Card.Title style={{color:  "#2d3f4b"}}>{props.title}</Card.Title>
        
      </Card.Body>
     <Card.Footer>
       <Button variant="info"> Ver mas </Button>
     </Card.Footer>
     </Card>

    )
}


export default Products;