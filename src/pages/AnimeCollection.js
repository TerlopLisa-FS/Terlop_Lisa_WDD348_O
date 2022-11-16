import React from "react";
import AnimeImg from '../images/anime_collection.png';

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

        <div className="row">
          <div className="col-lg-6">
          <div className="card">
          <div className="card-body">
          <div className="card bg-dark text-white">
          <article style={styles.container}>
          <h1>The Anime Collection</h1>
                    <img style = {styles.img} src={AnimeImg} alt="anime collection"/>
                    <p id ="anime-description">Anime collectors unite! Join us in our love for everything Anime!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </article>
                    </div>
                    </div>
                    </div>
                    </div>
              {
                items[0].map((item) => ( 
                  <div className="col-lg-6">
                    <div className="card">
                    <div className="card-body">
                    <div className="card bg-dark text-white">
                    
                <article style={styles.container} key = { item.id } >
                  <img className="card-img" src= {item.animeImg} alt="Anime" style={styles.img}/> 
                  <div className="card-img-overlay"> 
                   <h3 style={styles.h3}>Anime: { item.animeTitle }</h3>
                    <div className="d-grid gap-2 d-sm-flex justify-content-md-center">
                    <button style={styles.btn} id="button" className="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Follow</button>
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
    alignContent: 'center',
    padding: '10rem'
  },
  img: {
    height: '30rem',
    width: '35rem',
    alignContent: 'center',
    marginRight: '1rem'
       
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