import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './navBar.css'
//we create component navBar 
class Navbar extends React.Component{

    getNavLinkClass = (path) =>{
        return this.props.location.pathname == path ? 'active' : '';
    }

    render(){
          return(
            
                <div className="navegador">
                    <ul>
                       <li className={this.getNavLinkClass("/")} >
                           <NavLink to="/" >Inicio</NavLink></li>
                       <li className={this.getNavLinkClass("/agregar")}>
                           <NavLink to="/agregar">Obituarios</NavLink></li>
                    </ul>
                </div>
         
    
    

              )
              
    }
    
}    

Navbar = withRouter(Navbar);
export default Navbar;
