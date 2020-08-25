import React from 'react';
import BoutonCard from './boutonCard';
import NavComponent from './nav';
import { Button } from 'react-bootstrap';
import FooterComponent from './footer';


const Accessoires = ()=> {

    return (
        <div>
        <div className="box">
         <div className="listaccess">  
         
            <h1>ACCESSOIRES</h1>
            <h2>TRANSPORT ET PROTECTION</h2> <span>nombre accessoires</span>
            <BoutonCard/>
            <h2>MULTIMEDIA</h2> <span>nombre accessoires</span>
            <BoutonCard/>
            <h2>INTERIEUR</h2> <span>nombre accessoires</span>
            <BoutonCard/>
            <h2>EXTERIEUR</h2> <span>nombre accessoires</span>
            <BoutonCard/>
            <h2>MATERIEL DE GARAGE</h2> <span>nombre accessoires</span>
            <BoutonCard/>
          </div> 
            <NavComponent/>
            
        
       </div>
       <div className="footer">
                <FooterComponent/>
                <Button className="footer_boutonOption" href="./recapitulatif">
                    <div className="footer_boutonContent">
                    <span className="footer_boutonContentSpan">Option suivante: Récapitulatif</span>
                    </div>
                </Button>

         </div>
         </div>


    )





}
export default Accessoires;