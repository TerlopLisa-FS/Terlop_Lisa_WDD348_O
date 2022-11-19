import {React} from 'react';
import ImageURL from '../images/avatar.ico';
import Image from '../images/mc_small_logo.png';
import Icon from './Icon';
import MyAvatar from './MyAvatar';

const Header = () =>{
    return (
        <header style={styles.myHeader}>
          <div style={styles.left}>
            <Icon MyIcon={Image}/> 
          </div>
            
            <div>
            <h1 style={styles.h1}>Welcome to My Collectible</h1>
            </div>
            <div className="dataResult">
            </div>
            
          <div style={styles.rightSide}>
            <MyAvatar AvatarIcon={ImageURL}/>
          </div>
        </header>
                  
    );
}
export default Header

const styles = {
  myHeader: {
    padding:'1%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

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
    width: '50rem',
    marginLeft: '1rem',
    height: '3.5rem',
  },
  inputIcon: {
    background: '#ddd',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#650038'
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

  },
  h1: {
    background: 'none',
    marginLeft: '200px'
  }
}