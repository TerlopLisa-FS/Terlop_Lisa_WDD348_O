import React from "react";
import Button from './Button';

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
            <h1> Loading.... </h1> </div> ;
   
        return (
        <div>
              {
                items.map((item) => ( 
                <article style={styles.container} key = { item.id } >
                  <img src= {item.animeImg} alt="Anime Image" style={styles.img}/>  
                   <h3>Anime: { item.animeTitle }</h3>, 
                    <p></p>,
                    <Button btnText="View More"/>
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
       
  }
}