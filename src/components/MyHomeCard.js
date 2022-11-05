import React from 'react';
import Logo from '../images/mc_small_logo.png'
import Card from 'react-bootstrap/Card';

function HomeCard(){
    return (
      <div class="col-lg-6 mx-auto"> 
        <Card style={{ width: '50rem', height: '40rem', backgroundColor: '#BBE4D9' }}>
        <Card.Img class="d-block mx-auto mb-4" style={styles.logo} variant="top" src={Logo} />
        <Card.Body>
          <Card.Title style ={styles.title}></Card.Title>
          <Card.Text id='card' d="hero-content" class="lead mb-4">
                Whatever you collect, we know it’s more than just stuff.
                Each item holds precious memories that you’d like to cherish for a long time.
                MyCollectible.com makes it easy for you to organize and view your collections anywhere.
                Whether you want to share your collections with friends and fellow enthusiasts or have a private space to keep it all organized we have you covered.
            
          </Card.Text>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button id='button' type="button" class="btn btn-primary btn-lg px-4 gap-3">Get Started</button>
          </div>
        </Card.Body>
      </Card>
      </div>
    )
}
export default HomeCard

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    lineHeight: '1.7',
    fontSize: '2rem',

  },
  title: {
    fontSize: '2rem',
    textAlign: 'center'
  },
  logo: {
    height: '200px',
    width: '200px'
  }
}