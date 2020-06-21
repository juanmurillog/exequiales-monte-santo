import React from 'react';
import Header from '../Components/Home/header.js';
import HomeCarousel from '../Components/Home/carrousel';
import CardsPlan from '../Components/Home/cardsPlan';
import CardsProduct from '../Components/Home/cardsProduct';
import Footer from '../Components/Home/footer';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import '../App.css';


function Home(){

    return(
        <div className="container contain">
            <div>
          <Header/>
          <HomeCarousel/>
          <section className="plans">
            <div><h1 className="title-plans my-sm-5">PLANES EXEQUIALES </h1></div>
            <CardsPlan/>
          </section>
          <section>
          <div className="text-center mt-4"> <h1 className="text-center products-title"> PRODUCTOS</h1></div>
          <CardsProduct/>
          </section>
          <Footer/>
         
        </div>
        </div>
       
    )
}

export default Home;