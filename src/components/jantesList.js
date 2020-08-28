import React from 'react';
import Jantes from './jantes';
import {useSelector} from 'react-redux'


const JantesList = () => {

   
    const  jantes= useSelector((state)=> state.jantes)
    
  

    const displayJantes = () => {
        
        return Object.keys(jantes).map(key => (
        <Jantes key={jantes[key].id} jante={jantes[key]} />
        ));
        }
    
    return (
      <div className='row' >
        {displayJantes()}
      </div>
    );
}

export default JantesList;