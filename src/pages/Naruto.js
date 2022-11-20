import React from 'react';

function Naruto ({data}){
    return(
        <div>
            {
                data.map((value) => {
                    return(
                    <div style={styles.row} key ={value.id}>
                    <div style={styles.container} className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                    <div className="card bg-dark text-white">
                  <img className="card-img" src= {value.cardImage} alt="Anime" style={styles.img}/> 
                  <div className="card-img-overlay"> 
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    ) 
                })
            }
        </div>
    )
            
    
}

export default Naruto;

const styles = {
    img: {
        width: '100%',
        height: '40%',
        alignContent: 'center',
        marginRight: '2rem'
           
      },
      container: {
        width: '400px',
        padding: '2%',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        margin: '5%',
        marginLeft: '75px',
        backgroundColor: '#BEB1D7'
      },
      row: {
        display: 'inline-block',
      }
}