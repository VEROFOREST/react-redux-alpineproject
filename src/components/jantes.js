import React from 'react';
import '../App.css';


import FooterComponent from './footer';

import { Button } from 'react-bootstrap';
import CarouselComponent from './carousel';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'





const Jantes = (props)=> {
    const  jantes= useSelector((state)=> state.jantes)   
  
 const displayJantes = () => {
        
        return Object.keys(jantes).map(key => (
           
             
                <Card >
                    <button>
                    <Card.Img variant="top" src={jantes[key].imgCard} alt=""/>
                    <Card.Body>
                    <Card.Title>{jantes[key].name}</Card.Title>
                    <Card.Text>
                        {jantes[key].px} €
                    </Card.Text>
                    </Card.Body>
                    </button>
                </Card>
            

          
            
               ));
        }

return (
    
 
    <div  >
   
        
        <h2>JANTES</h2>
        <CarouselComponent/>
        <div  className="card-deck">
          
        <div className="row">
            {displayJantes()}
        </div>
        </div>
    
      <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./sellerie">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Sellerie</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Jantes;