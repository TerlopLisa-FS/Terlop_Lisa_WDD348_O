import React from "react";
import { useNavigate} from 'react-router-dom';

function Home ({data}) {
      const navigate = useNavigate();
      
      const navigateToFeatured = () => {
        navigate('featured');
      };

        const navigateToNaruto = () => {
          navigate('narutoCards');
        };

        const navigateToPonies = () => {
          navigate('paintedPonies');
        };
      
        return (
            <div className="dataResult">                
                  <article style={styles.container}>
                    <img style={styles.img} src={data[0].collectionImage} alt="Featured collection"/>
                    <h1>{data[0].collectionTitle}</h1>
                    <p>{data[0].description}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button onClick={navigateToPonies} id="button" className="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    </div>
                  </article>
                  <article style={styles.container}>
                    <img style={styles.img} src={data[1].collectionImage} alt="Featured collection"/>
                    <h1>{data[1].collectionTitle}</h1>
                    <p>{data[1].description}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button onClick={navigateToNaruto} id="button" className="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    </div>
                  </article>
                  <article style={styles.container}>
                    <img style={styles.img} src={data[2].collectionImage} alt="Featured collection"/>
                    <h1>{data[2].collectionTitle}</h1>
                    <p>{data[2].description}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button onClick={navigateToFeatured} id="button" className="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    </div>
                  </article>
                  </div>
    );
}
   
export default Home;

const styles = {
  container: {
    width: '400px',
    height: '550px',
    padding: '2%',
    justifyContent: 'space-between',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin: '5%',
    marginLeft: '75px',
    backgroundColor: '#BEB1D7'
  },
  img: {
    height: '20rem',
    width: '25rem',
    alignSelf: 'center'
       
  }
}