import React from "react";
import { Routes, Route } from "react-router";
import Header from './components/Header';
import Home from "./components/Home";
import About from './pages/About';
import Featured from './components/Featured';
import Nav from './components/Nav';

class App extends React.Component {
    render() {
        return (
        <div className = "App">
            <Header/>
            <Nav/>
            <section>
              <Routes>
                <Route path ='/' element = {<Home/>}/>
                <Route path ='/home' element = {<Home/>}/>
                <Route path ='/about' element = {<About/>}/>
                <Route path ='/featured' element = {<Featured/>}/>

              </Routes>
            </section>
        </div>
    );
}
}
   
export default App;