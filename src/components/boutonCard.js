import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import alarme from '../images/configurateur/accessoires/transport et protection/alarme.jpg';
import couleurBlanc from '../images/configurateur/couleurs/selection/blanc.jpg';
import couleurBleu from '../images/configurateur/couleurs/selection/blanc.jpg';
import couleurNoir from '../images/configurateur/couleurs/selection/blanc.jpg';

const BoutonCard = () => {
    return (
        

<div className="card-deck">
    <div class="row">
  <Card>
    <Card.Img variant="top" src={couleurBlanc} alt=""/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        prix
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={couleurBleu} alt="" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        prix{' '}
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={couleurNoir} alt="" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      prix
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
</div>
    
    )
}
export default BoutonCard;