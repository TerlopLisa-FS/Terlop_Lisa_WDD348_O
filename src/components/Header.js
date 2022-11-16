import {React} from 'react';
import ImageURL from '../images/avatar.ico';
import Image from '../images/mc_small_logo.png';
import Icon from './Icon';
import MyAvatar from './MyAvatar';
import Form from 'react-bootstrap/Form';
import SearchBar from './SearchBar';
import List from './ListData.json';

const Header = () =>{
    return (
        <header style={styles.myHeader}>
          <div style={styles.left}>
            <Icon MyIcon={Image}/> 
          </div>
            <Form>
            <div>
            <SearchBar placeholder="Search Collections" data={List}/>
            </div>
            <div className="dataResult">
            </div>
            </Form>
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

  }
}