import React, { Component } from 'react';
import Home  from './Pages/home';
import QuienesSomos from './Pages/quienesSomos';
import Productos from './Pages/productos';
import {BrowserRouter, Route} from 'react-router-dom';
import { render } from '@testing-library/react';


class App extends Component {
  render(){
    return (
     
        <BrowserRouter>
        
          <Route exact path="/" component={Home}/>
          <Route path ="/quienesSomos" component={QuienesSomos} />
          <Route path = "/productos"  component={Productos} />
        </BrowserRouter>
      
    );
   }
  
}

export default App;
