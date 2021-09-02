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
              A pretty CSS3 popup. <br /> Easily customizable.
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
      <h1>ISS Tracker</h1>
      <div>
        <h3>Latitude: <span id="latitude"></span>{coords.latitude}</h3>
        <h3>Longitude: <span id="longitude"></span>{coords.longitude}</h3>
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
