import React, { Component } from 'react';
import Header from './Components/header.js'
import './App.css';
import Home from './Components/home';
import Agregar from './Components/agregar';
import {BrowserRouter, Route} from 'react-router-dom';

import { render } from '@testing-library/react';

class App extends Component {
  render(){
    return (
      <div className="container contain">
        <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path ="/agregar" component={Agregar} />
        </div>
        </BrowserRouter>
      </div>
    );
   }
  
}

export default App;
