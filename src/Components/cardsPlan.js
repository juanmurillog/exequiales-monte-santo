import React from 'react'

import Plan from './plan.js'
import CardDeck from 'react-bootstrap/CardDeck'

function CardsPlan(){
    return(

             <CardDeck>
                 <Plan name=" Plan Boveda" imagen="/Images/Paquetes decks/boveda.jpg"/>
                 <Plan name ="Plan Cremacion" imagen="/Images/Paquetes decks/cremacion.jpg"/>
                 <Plan name ="Plan Empresarial" imagen ="/Images/Paquetes decks/empresarial.jpg"/>
             </CardDeck>

    )
}

export default CardsPlan;