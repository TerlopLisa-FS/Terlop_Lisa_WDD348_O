import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
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
          <Header/>
            <Nav/>
          <main>
            <section>
              <HashRouter>
                <Routes>
                <Route  exact path ='/' component = {<Home data={FeaturedData}/>}/>
                <Route  exact path ='/home' component = {<Home data={FeaturedData}/>}/>
                <Route  exact path ='/about' component = {<About/>}/>
                <Route  exact path="/home/featured" component={<Featured/>}/>
                <Route exact path="/animeOneCollection" component={<AnimeOne/>}/>
                <Route exact path="/animeTwoCollection" component={<AnimeTwo/>}/>
                <Route  exact path="/animeThreeCollection" component={<AnimeThree/>}/>
                <Route exact path="/home/narutoCards" component= {<Naruto data={NarutoCards}/>}/>
                <Route exact path="/home/paintedPonies" component={<PaintedPony data={PaintedPonies}/>}/>
                </Routes>
              </HashRouter>
            </section>
            </main>
            <Footer/>
        </div>
    );
}
   
export default App;