import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import About from './pages/About';
import Nav from './components/Nav';
import Background from './images/background_hero_image.png';
import Footer from './components/Footer';
import Featured from './pages/Featured';
import FeaturedData from './components/Featured.json';
import AnimeOne from "./pages/AnimeOne";
import AnimeTwo from "./pages/AnimeTwo";
import AnimeThree from "./pages/AnimeThree";
import Naruto from "./pages/Naruto";
import NarutoCards from './components/NarutoCards.json';
import PaintedPonies from './components/PaintedPony.json';
import PaintedPony from "./pages/PaintedPony";


function App() {
        return (
        <div className = "App" style={{ backgroundImage:`url(${Background})`, height: '100vh', }}>
              <Router>
              <Header/> 
              <Nav/>
              <Routes>
                <Route  exact path ='/' element = {<Home data={FeaturedData}/>}/>
                <Route  exact path ='/home' element = {<Home data={FeaturedData}/>}/>
                <Route  exact path ='/about' element = {<About/>}/>
                <Route  exact path="/home/featured" element={<Featured/>}/>
                <Route exact path="/animeOneCollection" element={<AnimeOne/>}/>
                <Route exact path="/animeTwoCollection" element={<AnimeTwo/>}/>
                <Route  exact path="/animeThreeCollection" element={<AnimeThree/>}/>
                <Route exact path="/home/narutoCards" element= {<Naruto data={NarutoCards}/>}/>
                <Route exact path="/home/paintedPonies" element={<PaintedPony data={PaintedPonies}/>}/>
                </Routes>
                <Footer/>
              </Router>
              </div>
    );
}
   
export default App;