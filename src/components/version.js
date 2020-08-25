import React from 'react';
import '../App.css';

import BoutonCarousel from './boutonCarrousel';
import FooterComponent from './footer';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';



 const Version = () => {

  //   const version=useSelector((state) => state.version)
  return (
    <div >
     
      
      <BoutonCarousel />
       
     
      <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./couleurs">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Couleurs</span>
              </div>
          </Button>

        </div>
      
      
    </div>
  );
}

export default Version;
 
 
 
