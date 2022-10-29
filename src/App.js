import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Featured from './pages/Featured';
import GetStarted from './pages/GetStarted';
import Home from './components/Home';
import MyHomeCard from './components/MyHomeCard';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App (){
  return (
      <div>
        <Header/>
        <main style={styles.container}>
          <Nav style= {styles.nav}/>
          <section>
            <Routes>
            <Route  exact path="/" element={<Home/>} />
              <Route  exact path="/home" element={<Home/>} />
              <Route path="/about" element= {<About/>} />
              <Route path="/featured" element= {<Featured/>} />
            </Routes>
          </section>
        </main>
        <Footer/>
      </div>
    );
  }
  
export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#DFF8EB',
    height: '100vh',
  },
  main: {
    display: 'flex',
    flex: 2,
    backgroundColor: 'lightgrey',
  },
  '@media: (min-width: 40rem)':{
    display: 'flex',
    flexDirection: 'column'
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'flex-wrap'
  },
  nav: {
    display: 'flex',
  },
  ads:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    color: 'lightgrey'

  }
}