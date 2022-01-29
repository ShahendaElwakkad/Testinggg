import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const TrackingShipment = () => {
  let { track_num } = useParams();
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
    <div>
      <h2>Shippment No. {track_num}</h2>
      {trackDetails ? (
        <h2>{trackDetails.CurrentStatus.state}</h2>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default TrackingShipment;
