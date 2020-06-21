import React from 'react'
import Header from '../Components/Home/header'
import Footer from '../Components/Home/footer'
import Portada from '../Components/QuienesSomos/portada'
  function QuienesSomos(){

    return(
          <div className="container contain">
          <Header/>
          <section>
            <Portada/>
          </section>
          <Footer/>
          
          </div>
          
    )
  }

  export default QuienesSomos;