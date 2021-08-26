import React from 'react';
import './App.css';
import getISS from './getISS.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const getCoords = async () => {
    const response = await getISS();
    console.log(response);
  }

  getCoords();

  return (
    <div className="App">
      <h1>ISS Tracker</h1>
      <div>
        <h3>Latitude: <span id="latitude"></span></h3>
        <h3>Longitude: <span id="longitude"></span></h3>
      </div>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
