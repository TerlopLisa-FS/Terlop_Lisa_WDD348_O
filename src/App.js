import React from "react";
import { Routes, Route } from "react-router";
import Header from './components/Header';
import Home from "./components/Home";
import About from './pages/About';
import Nav from './components/Nav';
import Background from './images/background_hero_image.png';
import Footer from './components/Footer';
import AnimeCollection from './pages/AnimeCollection';
import FeaturedData from './components/Featured.json';
function App() {
        return (
        <div className = "App" style={{ backgroundImage:`url(${Background})`, height: '100vh', }}>
          <Header/>
            <Nav/>
          <main>
            <section>
              <Routes>
                <Route path ='/' element = {<Home data={FeaturedData}/>}/>
                <Route path ='/home' element = {<Home data={FeaturedData}/>}/>
                <Route path ='/about' element = {<About/>}/>
                <Route path="/home/animeCollection" element={<AnimeCollection/>}/>
              </Routes>
            </section>
            </main>
            <Footer/>
        </div>
    );
}
   
export default App;