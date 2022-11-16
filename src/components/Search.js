import React from 'react';

function Search({data}) { 
    return (
            <div className="dataResult">
            {data.map((value, key) => {
                return (  
                  <row style={styles.row}>                 
                  <article style={styles.container}>
                    <img style={styles.img} src={value.imageLink} alt="pokemon"/>
                    <h1>{value.title}</h1>
                    <p>{value.description}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="button" className="btn btn-primary btn-lg px-4 gap-3">View More</button>
                    </div>
                  </article>
                  </row> 
                );
            })}
            </div>)
}

export default Search;

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