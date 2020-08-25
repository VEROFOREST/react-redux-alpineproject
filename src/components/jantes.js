import React from 'react';
import '../App.css';
import NavComponent from './nav';

import FooterComponent from './footer';


import CarouselComponent from './carousel';
import BoutonCard from './boutonCard';


const Jantes = ()=> {

return (
    <div>
    < NavComponent/>
    
        <h2>JANTES</h2>
    
    <CarouselComponent/>
    {/* <Image src={blancjantestandard} fluid /> */}
    
    
    <BoutonCard/>
    
    <FooterComponent/>
    </div>
)

}

export default Jantes;