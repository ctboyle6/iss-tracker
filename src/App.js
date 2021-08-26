import './App.css';

function App() {
  const getISS = async () => {
    const url = 'https://api.wheretheiss.at/v1/satellites/25544'

    const satelliteFetch = await fetch(url);
    const satelliteData = await satelliteFetch.json();
    console.log(satelliteData)

    document.getElementById('latitude').textContent = satelliteData.latitude;
    document.getElementById('longitude').textContent = satelliteData.longitude;
  }

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
