import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import alarme from '../images/configurateur/accessoires/transport et protection/alarme.jpg'

const BoutonCard = () => {
    return (
        

<CardDeck>
  <Card border="primary">
    <Card.Img variant="top" src={alarme} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        prix
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        prix{' '}
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      prix
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      prix
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardDeck>
    
    )
}
export default BoutonCard;