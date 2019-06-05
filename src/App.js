import React from 'react';
import './App.css';
import history from "./history";
import { Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shale from "./Pages/Shale/Shale";
import Technology from "./Pages/Technology/Technology";
import Documents from "./Pages/Documents/Documents";
import Advantage from "./Pages/Advantage/Advantage";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router history = {history}>
      <Route exact path = "/" component = {Home} />
      <Route path = "/about" component = {About} />
      <Route path = "/shale" component = {Shale} />
      <Route path = "/technology" component = {Technology} />
      <Route path = "/documents" component = {Documents} />
      <Route path = "/advantage" component = {Advantage} />
      <Route path = "/contact" component = {Contact} />
    </Router>
  );
}

export default App;
