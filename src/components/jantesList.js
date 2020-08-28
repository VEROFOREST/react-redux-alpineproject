import React from 'react';
import Jantes from './jantes';
import {useSelector,useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap';


const JantesList = (props) => {

   const dispatch = useDispatch();

    const choiceJantes = () => {
        dispatch({type:"CHOICE_JANTES", jantes : props.name});
    }
   
    
  

    
    
    return (
      
        <Card >
                    <button  onClick={() => choiceJantes()}>
                    <Card.Img variant="top" src={props.jantes} alt=""/>
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.px} €
                    </Card.Text>
                    </Card.Body>
                    </button>
                </Card>
            
     
    );
}

export default JantesList;