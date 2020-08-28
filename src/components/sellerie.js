import React from 'react';
import '../App.css';
import NavComponent from './nav';

import FooterComponent from './footer';


import CarouselComponent from './carousel';
import BoutonCard from './boutonCard';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Sellerie = ()=> {
    const sellerie =useSelector(state => state.sellerie)
    const displaySellerie = () => {
        
        
        return Object.keys(sellerie).map(key => (
           
             
                <Card >
                    <button>
                    <Card.Img variant="top" src={sellerie[key].imgCard} alt=""/>
                    <Card.Body>
                    <Card.Title>{sellerie[key].name}</Card.Title>
                    <Card.Text>
                        {sellerie[key].px} €
                    </Card.Text>
                    </Card.Body>
                    </button>
                </Card>
            

          
            
               ));
        }

return (
    <div>
    
    
     <h2>SELLERIE</h2>
    <CarouselComponent/>
    
    <div  className="card-deck">
          
        <div className="row">
    
     {displaySellerie()}
     </div>
     </div>
    
    <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./equipements">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Equipements</span>
              </div>
          </Button>

        </div>
    </div>
)

}

export default Sellerie;