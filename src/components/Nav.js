import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
    <Nav styles ={styles.nav}>
        <Link to= '/home'>Home</Link>
        <Link to= '/about'>About</Link>
        <Link to= '/featured'>Featured</Link>
    </Nav>
    
);

export default Navigation;

const styles = {
    nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '5%'
    }

}