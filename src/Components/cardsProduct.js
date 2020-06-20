import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Products from './products'
function CardsProduct(){

    return(

        <CardGroup>
          <Products title="Coronas" imagen="/Images/Productos decks/coronas.png"/>
          <Products title="Pedestales" imagen="/Images/Productos decks/pedestales.png"/>
          <Products title="Coros" imagen ="/Images/Productos decks/coros2.jpeg"/>
        </CardGroup>
    )
}

export default CardsProduct;