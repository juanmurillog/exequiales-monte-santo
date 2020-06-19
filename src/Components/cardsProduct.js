import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Products from './products'
function CardsProduct(){

    return(

        <CardGroup>
          <Products/>
          <Products/>
          <Products/>
        </CardGroup>
    )
}

export default CardsProduct;