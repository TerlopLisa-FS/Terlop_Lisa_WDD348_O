import React from "react";
import AnimeImg from '../images/anime_collection.png';
import NavigateHook from '../components/NavigateHook';

class Featured extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);
        this.animeOne = this.animeOne.bind(this);
        this.animeTwo = this.animeTwo.bind(this);
        this.animeThree = this.animeThree.bind(this);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    animeOne() {
      this.props.navigation('/animeOneCollection');
  }
  animeTwo() {
    this.props.navigation('/animeTwoCollection');
}
animeThree() {
  this.props.navigation('/animeThreeCollection');
}
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
          <div style={styles.articles}>
          <div className="col-sm-6">
          <div className="card">
          <div className="card-body">
          <div className="card bg-dark text-white">
          <h1>The Anime Collection</h1>
                    <img style = {styles.img} src={AnimeImg} alt="anime collection"/>
                    <p id ="anime-description">Anime collectors unite! Join us in our love for everything Anime!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                     </div>
                     </div>
                     </div>
                     </div>
              
                    <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                    <div className="card bg-dark text-white">
                  <img className="card-img" src= {items[0].animeImg} alt="Anime" style={styles.img}/> 
                  <div className="card-img-overlay"> 
                   <h3 style={styles.h3}> { items[0].animeTitle }</h3>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button style={styles.btn} id="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={this.animeOne}>View More</button>
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body" style={{maxHeight: "80%"}}>
                    <div className="card bg-dark text-white">
                  <img className="card-img" src= {items[1].animeImg} alt="Anime" style={styles.img}/> 
                  <div className="card-img-overlay"> 
                   <h3 style={styles.h3}>{ items[1].animeTitle }</h3>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button style={styles.btn} id="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={this.animeTwo}>View More</button>
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                    <div className="card bg-dark text-white">
                  <img className="card-img" src= {items[2].animeImg} alt="Anime" style={styles.img}/> 
                  <div className="card-img-overlay"> 
                   <h3 style={styles.h3}>Anime: { items[2].animeTitle }</h3>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button style={styles.btn} id="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={this.animeThree}>View More</button>
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Follow</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>

          );
  }
}
export default NavigateHook(Featured);
// export default Featured;

const styles = {
  container: {
    alignContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'flex-wrap',
      width: '500px',
      height: '400px',
      padding: '2%',
      justifyContent: 'space-between',
      borderRadius: '5px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      backgroundColor: '#BEB1D7',
      marginLeft: 'auto',
      marginRight: 'auto',
  },
  img: {
    width: '100%',
    height: '40%',
    alignContent: 'center',
    marginRight: '2rem'
       
  },
  h3: {
    textAlign: 'center',
    marinTop: '1rem'
  },
  articles: {
    marginLeft: '30%',
    display: 'inline'
  }
}