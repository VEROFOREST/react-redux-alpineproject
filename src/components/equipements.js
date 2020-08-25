import React from 'react';
import '../App.css';
import NavComponent from './nav';

import FooterComponent from './footer';


import CarouselComponent from './carousel';
import BoutonCard from './boutonCard';
import { Button } from 'react-bootstrap';


const Equipements = ()=> {

return (
    <div>
    
    <div className="container fluid">
        <h2>EQUIPEMENTS</h2>
    <CarouselComponent/>
    
    </div>
     <BoutonCard/>
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