const getISS = async () => {
    const url = 'https://api.wheretheiss.at/v1/satellites/25544'

    const response = await fetch(url);
    const satelliteData = await response.json();

    document.getElementById('latitude').textContent = satelliteData.latitude;
    document.getElementById('longitude').textContent = satelliteData.longitude;

    return satelliteData;
}

export default getISS;