import React from 'react';
import '../App.css';


import FooterComponent from './footer';

import { Button } from 'react-bootstrap';
import CarouselComponent from './carousel';
import BoutonCard from './boutonCard';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import janteLegende from '../images/configurateur/jantes/selection/jante-legende.jpg';
import janteSerac from '../images/configurateur/jantes/selection/jante-serac.jpg';
import janteStandard from '../images/configurateur/jantes/selection/jante-standard.jpg';
import { useSelector } from 'react-redux';


const Jantes = ()=> {
      let jantes = useSelector((state) => state.jantes)
    //   console.log (jantes)
    //    const displayJantes = () => {

    //  console.log(Object.keys(jantes).map(key => (
    //   <Jantes key={jantes[key].id} jantes={jantes[key]} />
    // )));
    //    }
 
return (

    <div>
        {/* {displayJantes()} */}
    
        <h2>JANTES</h2>
    
         <CarouselComponent/>
    
    
    
         <CardDeck>
            <Card  >
                <Card.Img variant="top" src={janteLegende} />
                <Card.Body>
                <Card.Title>{jantes[1].name}</Card.Title>
                <Card.Text>
                    prix
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card>
                <Card.Img variant="top" src={janteSerac} />
                <Card.Body>
                <Card.Title>{jantes[2].name}</Card.Title>
                <Card.Text>
                    prix{' '}
                </Card.Text>
                </Card.Body>
            
            </Card>
            <Card>
                <Card.Img variant="top" src={janteStandard} />
                <Card.Body>
                <Card.Title>{jantes[3].name}</Card.Title>
                <Card.Text>
                prix
                </Card.Text>
                </Card.Body>
                
            </Card>
            
            </CardDeck>
    
    
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