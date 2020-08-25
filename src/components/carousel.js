
import React from 'react';
import {Carousel} from 'react-bootstrap';
import NavComponent from './nav';
import legende from '../images/configurateur/modele/selection/legende.png'
import pure from '../images/configurateur/modele/selection/pure.png'




const CarouselComponent = () => {
    // const version = useSelector((state)=> state.version)
    // const toto="toto"
    //     console.log (toto)
      

    
    return (
        <div className="box">
     <Carousel className="carousel">
        <Carousel.Item>
           <img
            className="d-block w-100"
             src={legende} 
            alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={pure}
            alt="Third slide"
            />


        </Carousel.Item>

        </Carousel>
        <NavComponent/>
    </div>
    )
    

}
export default CarouselComponent;