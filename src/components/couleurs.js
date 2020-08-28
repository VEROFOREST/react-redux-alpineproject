import React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import FooterComponent from './footer';
import Button from 'react-bootstrap/Button';
import BoutonCard from './boutonCard';

import CarouselComponent from './carousel';
import {useSelector} from 'react-redux'


const Couleurs = () => {

  const  couleursChoix= useSelector((state)=> state.couleurs)
  console.log(couleursChoix)


     const displayColorSelectionCards = () => {
        
        return Object.keys(couleursChoix).map(key => 
             
        (
       
        <BoutonCard key={couleursChoix[key].id} couleur={couleursChoix[key] } string={couleursChoix[key].string} />
                
        ));
      }
    





    return (
      <div>

        <CarouselComponent/>
        <div className="card-deck">
        <div class="row">
        {displayColorSelectionCards()}
        </div>
        </div>
        <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./jantes">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Jantes</span>
              </div>
          </Button>
          </div>

      </div>
    );

}

export default Couleurs;
