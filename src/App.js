import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import TrackingShipment from "./components/TrackingShipment";
import SignIn from "./components/SignIn";
import ContactSales from "./components/ContactSales";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ContactSales" element={<ContactSales />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route
          path="/TrackingShipment/:track_num"
          element={<TrackingShipment />}
        />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
