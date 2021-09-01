import React, { useState, useEffect } from 'react';
import './App.css';
import getISS from './getISS.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const [coords, setCoords] = useState({});
  
  useEffect(() => {
    const fetchISS = async () => {
      const satelliteData = await getISS();
      
      setCoords(satelliteData);
    };
    
    fetchISS();
  }, [])

  const refreshISS = async () => {
    const satelliteData = await getISS();
      
    setCoords(satelliteData);
  }

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
      <button onClick={() => {
        refreshISS();
      }}>
        Where's it at now??
      </button>
    </div>
  );
}

export default App;
