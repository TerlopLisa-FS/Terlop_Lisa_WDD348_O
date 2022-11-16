import React from 'react';
import GameCol1 from '../images/game_collection1.jpeg';
import GameRoom from '../images/game_room.jpeg';

function About() {
    return (
      <row style={styles.row}>                 
      <article style={styles.container}>
        <img style={styles.img} src={GameCol1} alt="Game Collection"/>
        <h1>Who We Are</h1>
            <p>             
              MyCollectible was created in 2022 by three siblings who loved to collect game systems and mermorabilia.
              They came up with the idea of having a space to store and organize personal collections while
              allowing you meeting new people with similar interests.
              </p>
                <p>
                Many collectible sites cater to only a few select type of collections but here
                You are able to create your own if it’s not already listed.
                </p>
                <p>
                You are in control of how you want to store your collections. They can be private or public. You can
                meet others with similar interests or simply have your own safe space.
                </p>
                <p>
                We also created an app so you can take MyCollectible with you wherever you go.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    </div>
              </article>    
              <article style={styles.container}>
        <img style={styles.img} src={GameRoom} alt="Game Room"/>
        <h1>How to Get Started</h1>
              <p>             
                First things first, you are going to needto create an account by clicking the
                Get started button down below :)
              </p>
                
                <p>
                Once you have your profile all set
                up go ahead and add your collections
                by clicking on the “add collection”
                button located on your profile.
                You can create as many as you
                want! :)
                </p>

                <p>
                If you aren’t sure if you’re ready to
                Sign up yet, no worries! There are really
                cool collectons that you can browse to get
                inspired.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Get Started</button>
                    </div>
              </article>    
      </row>
    )
}

export default About;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'flex-wrap',
    width: '550px',
    padding: '2%',
    justifyContent: 'space-between',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    marginLeft: '5%'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'flex-wrap',
    marginLeft:'60px'
  },
  img: {
    height: '20rem',
    width: '35rem'
  }
}