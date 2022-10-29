import React from 'react'

const FeaturedDisplay = (props) => {
    return (
        <article style={styles.container}>
            <img src={props.animeImg} alt="anime" />
            <h1 style = {styles.h1}>{props.animeName}</h1>
            <button type="submit" style={styles.btn}>View More</button>
        </article>
    );
}
export default FeaturedDisplay;

const styles = {

}