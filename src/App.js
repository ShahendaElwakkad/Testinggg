import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import TrackingShipment from './components/TrackingShipment';
import SignIn from './components/SignIn';
import ContactSales from './components/ContactSales';
import Hero from './components/Hero';


function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ContactSales' component={ContactSales} />
          <Route path='/Pricing' component={Pricing} />
          <Route path='/TrackingShipment' component={TrackingShipment} />
          <Route path='SignIn' component={SignIn} />
        </Switch>
      </Router>
    
     
    </div>

  );
}

export default App;
