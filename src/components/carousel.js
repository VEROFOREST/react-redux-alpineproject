
import React from 'react';
import {Carousel} from 'react-bootstrap';
import NavComponent from './nav';
import {useSelector} from 'react-redux'




const CarouselComponent = () => {
    const CarouselImages= useSelector((state)=> state.carouselImages)

       
    const displayCarouselImages = () => {
        return Object.keys(CarouselImages).map(key => (
        
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImages[key]} 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    ));
    
     }   
       return (
     
            <div   className="box">
                <Carousel className="carousel">
                {displayCarouselImages()}
                </Carousel>
                <NavComponent/>
            </div>
    );

}
export default CarouselComponent;