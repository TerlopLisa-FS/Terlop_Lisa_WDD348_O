import React from 'react';
import ImageURL from '../images/avatar.ico';
import Image from '../images/mc_small_logo.png';
import Icon from './Icon';
import MyAvatar from './MyAvatar';
import {FaSearch} from 'react-icons/fa';
import MyIcon from './Icon';

function Header(){
    return (
        <header style={styles.myHeader}>
          <div style={styles.left}>
            <Icon MyIcon={Image}/> 
          </div>
          <div style={styles.searchCont}>
            <span style={styles.inputIcon}><FaSearch/></span>
            <input
            type="text"
            style={styles.inputwithIcon}
            placeholder="search" />
          </div>
          <div style={styles.rightSide}>
            <MyAvatar AvatarIcon={ImageURL}/>
          </div>
        </header>
    )
}
export default Header

const styles = {
  myHeader: {
    padding:'1%',
    backgroundColor: 'white',
    color: 'rgb(163,173,194)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '1px 6px 1px 1px rgba(0, 0, 25, .1)'

  },
  left: {
    display: 'flex',
    flexDirection: 'row'
  },
  logo: {
    borderRadius: '50%',
    height: '50px',
    width: '60px',
    marginRight: '10%',
    backgroundColor: 'white',
    alignItems: 'center'

  },
  searchCont: {
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '2px',
    width: '40%',
    height: '20%'
  },
  inputIcon: {
    background: '#ddd',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem'
  },
  inputwithIcon: {
    border: 'none',
    flex: 1,
    padding: '10px'
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '3%'

  },
  rightIcons: {

  }
}