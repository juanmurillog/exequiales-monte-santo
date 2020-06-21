import React from 'react'
import './header.css'
import HomeNavbar from './navBar.js';
import  {FontAwesomeIcon}  from  '@fortawesome/react-fontawesome' ;
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import  'bootstrap/dist/css/bootstrap.min.css' ;

//we create component header 

function Header(){

    return(
      <header>
        <div className="d-flex  align-self-center  justify-content-between">
           <img src="/Images/Logo-sinfondo.png" alt=""/>
            <div className="d-sm-flex  header-contact d-none ">
                <div className=" header-info ">
                  <div >
                  <FontAwesomeIcon  className="icon-call mr-3" icon={faWhatsappSquare}  />
                  </div>
               
                  <div className="header-data"><p >(57) 312 485 97 02 </p></div>
                    
                </div>
                <div className=" header-info">
                <FontAwesomeIcon  className="icon-msg mr-3" icon={faEnvelope}  />
                    <div className="header-data"><p >jmontesanto.hg@hotmail.com </p></div>
                    
                   
                </div>
                
            </div>          
        </div>
        <HomeNavbar/>
      </header>
      
      
      
          
      
       
    )
}


export default Header;