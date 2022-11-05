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

        <div>
          <article style={styles.myArticle}>
                    <img style = {styles.img} src={AnimeImg} alt="anime collection"/>
                    <h1>The Anime Collection</h1>
                    <p id ="anime-description">Anime collectors unite! Join us in our love for everything Anime!</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" class="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </article>
              {
                items.map((item) => ( 
                <article style={styles.container} key = { item.id } >
                  <img src= {item.animeImg} alt="Anime" style={styles.img}/>  
                   <h3>Anime: { item.animeTitle }</h3>, 
                    <p></p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" class="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    <button id="button" class="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </article>
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
    height: '20rem',
    width: '20rem'
       
  },
  myArticle: {
    display: 'flex',
    flexDirection: 'column'
  }
}