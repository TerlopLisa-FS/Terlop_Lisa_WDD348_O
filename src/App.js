import React from "react";
import Header from './components/Header';
import Nav from './components/Nav';

class App extends React.Component {
    render() {
        return (
        <div className = "App">
            <Header/>
            <Nav/>
        </div>
    );
}
}
   
export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '40%'
  },
  img: {
    height: '20rem',
    width: '20rem'
       
  }
}