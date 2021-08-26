import './App.css';
import getISS from './getISS.js';

function App() {
  setInterval(getISS, 3000);

  return (
    <div className="App">
      <h1>ISS Tracker</h1>
      <div>
        <h3>Latitude: <span id="latitude"></span></h3>
        <h3>Longitude: <span id="longitude"></span></h3>
      </div>
    </div>
  );
}

export default App;
