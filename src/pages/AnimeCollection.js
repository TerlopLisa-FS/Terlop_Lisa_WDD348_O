import React from "react";
import AnimeImg from '../images/anime_collection.png';
import Card from 'react-bootstrap';
class Featured extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
          "https://gogoanime.consumet.org/recent-release")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                    
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h3> Loading.... </h3> </div> ;
   
        return (

        <div class="row">
          <div class="col-lg-6">

          <article style={styles.myArticle}>
          <h1>The Anime Collection</h1>
                    <img style = {styles.img} src={AnimeImg} alt="anime collection"/>
                    <p id ="anime-description">Anime collectors unite! Join us in our love for everything Anime!</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" class="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </article>
                    </div>
              {
                items.map((item) => ( 
                  <div class="col-lg-6">
                    <div class="card">
                    <div class="card-body">
                    <div class="card bg-dark text-white">
                    
                <article style={styles.container} key = { item.id } >
                  <img class="card-img" src= {item.animeImg} alt="Anime" style={styles.img}/> 
                  <div class="card-img-overlay"> 
                   <h3 style={styles.h3}>Anime: { item.animeTitle }</h3>, 
                    <p></p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-md-center">
                    <button id="button" class="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    <button id="button" class="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </div>
                    </article>
                    </div>
                    </div>
                    </div>
                    </div>
                ))
            }
            
        </div>
                );
                }
}
   
export default Featured;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '40%'
  },
  img: {
    height: '40rem',
    width: '50rem',
    alignContent: 'center',
    opactiy: '50%'
       
  },
  myArticle: {
    display: 'flex',
    flexDirection: 'column'
  },
  h3: {
    textAlign: 'center',
    marinTop: '1rem'
  }
}