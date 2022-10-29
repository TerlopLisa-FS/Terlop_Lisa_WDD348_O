import React from 'react';
import {useState, useEffect} from 'react';
import FeaturedDisplay from '../components/FeaturedDisplay';

function Featured() {
    const [apiData, setapiData] = useState(null);

    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
            const data = await response.json();
            const [user] = data.results;
            console.log(user)
            setapiData(user);
        }
        fetchAPI();
    }, []);
    return (
        <section style={styles.container}>
            <h1>Featured</h1>
            {apiData && <FeaturedDisplay
            animeID = {apiData.anime_id}
            animeName={apiData.anime_name}
            animeImg={apiData.anime_img}
            
            
            />}
        </section>
    )
}

export default Featured;

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        padding: '2%',
        height: '100vh',
        width: '200%'
    }
}