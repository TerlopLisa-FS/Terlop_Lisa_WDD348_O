import React from 'react';
import Logo from '../images/mc_small_logo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomeCard(){
    return (
      <div style={styles.container}> 
        <Card style={{ width: '50rem', height: '30rem' }}>
        <Card.Img style={styles.logo} variant="top" src={Logo} />
        <Card.Body>
          <Card.Title>My Collectible</Card.Title>
          <Card.Text>
                Whatever you collect, we know it’s more than just stuff.
                Each item holds precious memories that you’d like to cherish for a long time.
                MyCollectible.com makes it easy for you to organize and view your collections anywhere.
                Whether you want to share your collections with friends and fellow enthusiasts or have a private space to keep it all organized we have you covered.
          </Card.Text>
          <Button variant="primary">Get Started</Button>
        </Card.Body>
      </Card>
      </div>
    )
}
export default HomeCard

const styles = {
  container:{
    alignContent: 'center'
  },
  logo: {
    height: '200px',
    width: '200px'
  },
  cardButton:{
    width: '50%',
    height: '10%',
    backgroundColor: 'none',
    padding: '5%'
  }
}