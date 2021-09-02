import React, { useState, useEffect } from 'react';
import './App.css';
import getISS from './getISS.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [coords, setCoords] = useState({});
  
  const fetchISS = async () => {
    const satelliteData = await getISS();
      
    setCoords(satelliteData);
  }

  useEffect(() => {
    fetchISS();
  }, [coords.latitude])

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const showMap = () => {
    if (coords.latitude) {
      return (
        <MapContainer center={[coords.latitude, coords.longitude]} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[coords.latitude, coords.longitude]}>
            <Popup>
              Her: Come over <br /> Me: I can't. I'm flying over Asia right now. <br /> Her: My parents aren't home. <br /> ISS Velocity: {numberWithCommas(Number(coords.velocity).toFixed(2))} km/hr
            </Popup>
          </Marker>
      </MapContainer>
      )
    }
  }

  return (
    <div className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>
        <div className="spinner-grow text-primary mx-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        ISS Tracker
        <div className="spinner-grow text-primary mx-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </h1>
      <div>
        <h3>Latitude: <span id="latitude"></span>{Number(coords.latitude).toFixed(4)}&deg;</h3>
        <h3>Longitude: <span id="longitude"></span>{Number(coords.longitude).toFixed(4)}&deg;</h3>
      </div>
      <div>
        {showMap()}
      </div>
      <button 
        onClick={() => {
          fetchISS();
        }}
        className="btn btn-primary my-4 p-3 fw-bold" 
      >
        Where's it at now??
      </button>
    </div>
  );
}

export default App;
