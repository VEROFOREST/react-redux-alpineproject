import React from 'react';
import {Carousel,Button} from 'react-bootstrap';

import NavComponent from './nav';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

const BoutonCarousel = (props) => {
   const  versions= useSelector((state)=> state.version)
   const dispatch = useDispatch();
    const choiceVersion = () => {
        dispatch({type:"CHOICE_VERSION", version: props.name});
    }
    
    
    return (
     <div>   
                
           <div className="row">
               
                <Button  onClick={()=>choiceVersion()}  variant="link" className="version">
                <img
                    className="d-block w-100 m-50"
                    src={props.version} 
                    alt="First slide"
                />
                
                </Button>
            </div>
            <div>   
                  <h3 >{props.name}</h3>
                  <h4 >{props.px} €</h4>
            </div>  
    </div>      
            
        );
    
     
       
}

export default BoutonCarousel;