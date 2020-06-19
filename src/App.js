import React, { Component } from 'react';
import Header from './Components/header.js'
import './App.css';
import Home from './Components/home';
import Agregar from './Components/agregar';
import HomeCarousel from './Components/carrousel';
import {BrowserRouter, Route} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import CardsPlan from './Components/cardsPlan'
import CardsProduct from './Components/cardsProduct'


import { render } from '@testing-library/react';


class App extends Component {
  render(){
    return (
      <div className="container contain">
        <BrowserRouter>
        <div>
          <Header/>
          <HomeCarousel/>
          <section className="plans">
            <div><h1 className="title-plans my-sm-5">PLANES EXEQUIALES </h1></div>
            <CardsPlan/>
          </section>
          <section>
          <div class="text-center mt-4"> <h1 className="text-center products-title"> PRODUCTOS</h1></div>
          <CardsProduct/>
          </section>
          <Route exact path="/" component={Home}/>
          <Route path ="/agregar" component={Agregar} />
        </div>
        </BrowserRouter>
      </div>
    );
   }
  
}

export default App;
