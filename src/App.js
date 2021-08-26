import './App.css';
import getISS from './getISS.js';

function App() {
  getISS();

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
