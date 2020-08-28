import React from 'react';
import '../App.css';
import NavComponent from './nav';

import FooterComponent from './footer';


import CarouselComponent from './carousel';
import { useSelector } from 'react-redux';

import { Button, Card } from 'react-bootstrap';


const Equipements = ()=> {

    const equipements =useSelector(state => state.equipements)
    const displayequipements = () => {
        
        
        return Object.keys(equipements).map(key => (
           
             
                <Card >
                    <button>
                    <Card.Img variant="top" src={equipements[key].imgCard} alt=""/>
                    <Card.Body>
                    <Card.Title>{equipements[key].name}</Card.Title>
                    
                    </Card.Body>
                    </button>
                </Card>
            

          
            
               ));
        }

return (
    <div>
    
   
        <h2>EQUIPEMENTS</h2>
    <CarouselComponent/>
    
    
     <div  className="card-deck">
          
        <div className="row">
    
     {displayequipements()}
     </div>
     </div>
      <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./accessoires">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Accessoires</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Equipements;