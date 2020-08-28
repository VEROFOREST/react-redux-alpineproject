import React from 'react';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux'





const BoutonCard = (props) => {
    const version = useSelector ((state)=>state.version)
    const dispatch = useDispatch();

    const choiceColor = () => {
        dispatch({type:"CHOICE_COLOR", color : props.string, version:props.nameVersion});
    }
    console.log (props.string)

 return (
       
            <Card >
            <button  onClick={() => choiceColor()} >
                <Card.Img variant="top" src={props.couleur.img} alt=""/>
                <Card.Body>
                <Card.Title>{props.couleur.name}</Card.Title>
                <Card.Text>
                    {props.couleur.px} €
                </Card.Text>
                </Card.Body>
            </button>
            </Card>
   
    )
}
export default BoutonCard;