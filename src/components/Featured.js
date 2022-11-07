import React from "react";
import { useNavigate} from 'react-router-dom';

function Featured ({data}) {
      const navigate = useNavigate();
      const navigateToAnime = () => {
        navigate('AnimeCollection');
      }
        return (
            <div>
            <div className="dataResult">
            {data.map((value, key) => {
                return (  
                  <row style={styles.row}>                 
                  <article style={styles.container}>
                    <img style={styles.img} src={value.collectionImage} alt="Featured collection"/>
                    <h1>{value.collectionTitle}</h1>
                    <p>{value.description}</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button onClick={navigateToAnime} id="button" class="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    </div>
                  </article>
                  </row>
                  
                );
            })}
            </div>
            </div>
    );
}
   
export default Featured;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'flex-wrap',
    width: '400px',
    padding: '2%',
    justifyContent: 'space-between',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin: '5%',
    marginLeft: '60px'
  },
  img: {
    height: '20rem',
    width: '30rem'
       
  },
  row: {
    display: 'inline-block',
  }
}