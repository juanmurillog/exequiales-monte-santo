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
                 info={<ul id="list-boveda">
                 <h4>Incluye 5 personas o 9 personas</h4>
                 <li>Incluye traslado a nivel nacional</li>
                  <li> Misa exequial </li>
                  <li> Ramo</li>
                  <li> Misa del año</li>
                </ul>}/> 
                <Plan 
                name ="Plan Cremacion" 
                imagen="/Images/Paquetes decks/cremacion.jpg"
                info={
                    <ul id="list-cremacion">
                  <h4>Incluye 9 personas</h4>
                  <li> Traslado a nivel nacional</li>
                   <li> Misa exequial </li>
                   <li> Ramo</li>
                   <li> Misa del año</li>
                   <li> Cremacion</li>
                </ul>
               
                }/>
                <Plan 
                name ="Plan Empresarial" 
                imagen ="/Images/Paquetes decks/empresarial.jpg"
                info="Contactenos"/>
             </CardDeck>

    )
}

export default CardsPlan;