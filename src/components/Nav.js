import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
    <Nav style ={styles.nav}>
        <Link id='li' to= '/home'>Home</Link>
        <Link id='li' to= '/about'>About</Link>
        <Link id='li' to= '/featured'>Featured</Link>
    </Nav>
    
);

export default Navigation;

const styles = {
    nav: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'stretch',
    fontSize: '1.5rem',
    alignItems: 'center',
    color: 'gray',
    // marginLeft: '2rem',
    justifyContent: 'space-between'
    
    }

}