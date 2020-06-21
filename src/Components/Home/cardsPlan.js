import React from 'react'
import {CardDeck,Accordion} from 'react-bootstrap'
import Plan from './plan.js'

// Componente Con el paquete de cards de la seccion de planes 
function CardsPlan(){
    return(

             <CardDeck>
                <Plan
                 name=" Plan Boveda" 
                 imagen="/Images/Paquetes decks/boveda.jpg"
                 personas="Incluye 5 o 9 Personas"
                 transfer ="Traslado a nivel Nacional"
                 misaE ="Misa Exequial"
                 ramo = "Ramo"
                 misaA = "Misa anual"
                 /> 
                 
                <Plan 
                name ="Plan Cremacion" 
                imagen="/Images/Paquetes decks/cremacion.jpg"
                personas="Incluye 9 Personas"
                transfer ="Traslado a nivel Nacional"
                misaE ="Misa Exequial"
                ramo = "Ramo"
                misaA = "Misa anual"
                cremacion= "Cremacion"
                />
                <Plan 
                name ="Plan Empresarial" 
                imagen ="/Images/Paquetes decks/empresarial.jpg"
               />
             </CardDeck>

    )
}

export default CardsPlan;