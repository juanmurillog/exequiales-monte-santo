import React ,{ useState,setIndex,handleSelect ,index} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carrousel.css'



function HomeCarousel(){

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
}
  return (
        
     
    <Carousel activeIndex={index} onSelect={handleSelect} id="home-carousel">
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="/Images/carousel/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="/Images/carousel/carousel2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="/Images/carousel/carousel3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
         
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



     
  
 

 export default HomeCarousel;