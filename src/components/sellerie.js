import React from 'react';
import '../App.css';
import NavComponent from './nav';

import FooterComponent from './footer';


import CarouselComponent from './carousel';
import BoutonCard from './boutonCard';
import { Button } from 'react-bootstrap';


const Sellerie = ()=> {

return (
    <div>
    
    
     <h2>SELLERIE</h2>
    <CarouselComponent/>
    
    
     <BoutonCard/>
    
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