import React from 'react';
import '../App.css';
import NavComponent from './nav';

import FooterComponent from './footer';


import CarouselComponent from './carousel';
import BoutonCard from './boutonCard';


const Sellerie = ()=> {

return (
    <div>
    < NavComponent/>
    <div className="container fluid">
     <h2>SELLERIE</h2>
    <CarouselComponent/>
    
    </div>
     <BoutonCard/>
    
    <FooterComponent/>
    </div>
)

}

export default Sellerie;