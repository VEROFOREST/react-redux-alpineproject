import React from 'react';
import '../App.css';


import FooterComponent from './footer';

import { Button } from 'react-bootstrap';
import CarouselComponent from './carousel';


import {useSelector} from 'react-redux'
import JantesList from './jantesList';





const Jantes = (props)=> {
    
    const  jantes= useSelector((state)=> state.jantes)   
  
 const displayJantes = () => {
        
        return Object.keys(jantes).map(key => (
           
             
                <JantesList key={jantes[key].id} jantes={jantes[key].imgCard } name={jantes[key].name} px={jantes[key].px}/>

          
            
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