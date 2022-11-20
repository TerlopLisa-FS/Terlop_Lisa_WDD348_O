import React from "react";

class AnimeOne extends React.Component {
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
          <div className="col-sm-6">
          <div className="card">
          <div className="card-body" style={{maxHeight: "80%"}}>
          <div className="card bg-dark text-white">
        <img className="card-img" src= {items[0].animeImg} alt="Anime" style={styles.img}/> 
        <div className="card-img-overlay"> 
         <h3 style={styles.h3}>{ items[0].animeTitle }</h3>
         <p>{items[1].subOrDub}</p>
          <a style={styles.aTag} target="_blank" href={items[0].episodeUrl}>Watch Now</a>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button id="button" className="btn btn-primary btn-lg px-4 gap-3">Follow</button>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
        )
  }
}
   
export default AnimeOne;

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
    marinTop: '1rem',
    color: '#2C0834'
  },
  aTag: {
    display: "block",
    width: "115px",
    height: "50px",
    background: "#4E9CAF",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
    lineHeight: "25px",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '50px',
    textDecoration: 'none',
    boxShadow: '1px 1px 1px black'
  }
}