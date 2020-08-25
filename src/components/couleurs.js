import React from 'react';
import '../App.css';
import BoutonCarousel from './boutonCarrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import FooterComponent from './footer';
import Button from 'react-bootstrap/Button';
import BoutonCard from './boutonCard';



const Couleurs = () => {

    return (
      <div className="App">

        <BoutonCarousel/>
        <BoutonCard/>
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
