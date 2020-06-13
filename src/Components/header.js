import React from 'react'
import './header.css'
import Navbar from './navBar.js';
//we create component header 

function Header(){

    return(
       
      <div className="contain-nav">
           <div className="head-img">
           <img src="/images/logo.jpg"></img>
           </div>
          <Navbar/>
      </div>
      
          
      
       
    )
}


export default Header;