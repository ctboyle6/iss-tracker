const getISS = async () => {
    const url = 'https://api.wheretheiss.at/v1/satellites/25544'

    const satelliteFetch = await fetch(url);
    const satelliteData = await satelliteFetch.json();

    document.getElementById('latitude').textContent = satelliteData.latitude;
    document.getElementById('longitude').textContent = satelliteData.longitude;
}

export default getISS;