import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TrackingShip.css";
import Footer from "./Footer";


const TrackingShipment = () => {
  let { track_num } = useParams();
  let { timestamp } = useParams();
  const [trackDetails, setTrackDetails] = useState("");
  useEffect(() => {
    axios
      .get(`https://tracking.bosta.co/shipments/track/${track_num}`)
      .then((res) => {
        console.log(res.data);
        setTrackDetails(res.data);
      })
      .catch((er) => console.log(er));
  }, []);
  return (
    <>
    <div>
      <h2 className="data-ShipNo">Shippment No. {track_num}</h2>
      {trackDetails ? (
        <h2 className="data-ShipStatus">{trackDetails.CurrentStatus.state}</h2>
      ) : (
        <h1 className="">Invalid Number</h1>
      )}

      <h2 className="data-date">Latest Update {timestamp}</h2>
      {trackDetails ? (
        <h2 className="data-date">{trackDetails.CurrentStatus.timestamp}</h2>
      ) : (
        <h1 className="">Invalid Number</h1>
      )}
    </div>
    <Footer />

    </>
    
  );
};

export default TrackingShipment;
