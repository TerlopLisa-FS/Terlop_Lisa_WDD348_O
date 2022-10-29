import React from 'react';
import { Link } from 'react-router-dom';
function Nav(){
    return(
        <nav style={styles.container}>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/featured'>Featured</Link>
        </nav>
    )
}
export default Nav;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignSelf: 'stretch',
        fontSize: '1.5rem',
        backgroundColor: 'black',
        padding: '2rem',
        color: 'white'
    }
}