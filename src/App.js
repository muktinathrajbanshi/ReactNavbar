import React from 'react';
import Navbar from './Components/Navbar';
import { Switch, Route, } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
        <section className="hero_section">
        <p>Welcome to</p>
        <h1>Muktinath Tech Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
        <section className="hero_section">
        <p>Welcome to</p>
        <h1>Muktinath Tech About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
        <section className="hero_section">
        <p>Welcome to</p>
        <h1>Muktinath Tech Services Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
        <section className="hero_section">
        <p>Welcome to</p>
        <h1>Muktinath Tech Contact Page</h1>
      </section>
    </>
  );
};



const App = () => {
  return (
    <>
     <Switch>
           <Route exact path="/">
        <Home />
      </Route>
            <Route path="/about">
        <About />
      </Route>
            <Route path="/service">
        <Service />
      </Route>
            <Route path="/contact">
        <Contact />
      </Route>
     </Switch>
    </>
  )
}

export default App;
