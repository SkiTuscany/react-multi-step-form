import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import CheckoutPage from './components/CheckoutPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
    </Switch>
  </Router>
  
  );
}

export default App;
