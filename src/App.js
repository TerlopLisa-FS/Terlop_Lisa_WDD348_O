import React from "react";
import { Routes, Route } from "react-router";
import Header from './components/Header';
import Home from "./components/Home";
import About from './pages/About';
import Featured from './components/Featured';
import Nav from './components/Nav';
import Background from './images/background_hero_image.png';
import Footer from './components/Footer';
import FeaturedData from './components/Featured.json';
import AnimeCollection from './pages/AnimeCollection';

class App extends React.Component {
    render() {
        return (
          
        <div className = "App" style={{ backgroundImage:`url(${Background})`, height: '100vh', }}>
          <Header/>
            <Nav/>
          <main style={styles.main}>
            <section>
              <Routes>
                <Route path ='/' element = {<Home/>}/>
                <Route path ='/home' element = {<Home/>}/>
                <Route path ='/about' element = {<About/>}/>
                <Route path ='/featured' element = {<Featured data={FeaturedData}/>}/>
                <Route path="/featured/animeCollection" element={<AnimeCollection/>}/>
              </Routes>
            </section>
            </main>
            <Footer/>
        </div>
    );
}
}
   
export default App;

const styles = 
{
  main: {
    backgroundSize: 'cover',
    backgroundAttachment: 'scroll'
  }
}