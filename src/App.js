import React, { useState, useEffect } from 'react';
import './App.css';
// import getISS from './getISS.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const [coords, setCoords] = useState({});
  
  useEffect(() => {
    const getISS = async () => {
      const url = 'https://api.wheretheiss.at/v1/satellites/25544'
  
      const response = await fetch(url);
      const satelliteData = await response.json();
  
      // document.getElementById('latitude').textContent = satelliteData.latitude;
      // document.getElementById('longitude').textContent = satelliteData.longitude;

      setCoords(satelliteData);
    };
    
    getISS();
  }, [])

  console.log(coords)

  const showMap = () => {
    if (coords.latitude) {
      return (
        <MapContainer center={[coords.latitude, coords.longitude]} zoom={2} scrollWheelZoom={false}>
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
    <div className="App">
      <h1>ISS Tracker</h1>
      <div>
        <h3>Latitude: <span id="latitude"></span>{coords.latitude}</h3>
        <h3>Longitude: <span id="longitude"></span>{coords.longitude}</h3>
      </div>
      <div>
        {showMap()}
      </div>
    </div>
  );
}

export default App;
