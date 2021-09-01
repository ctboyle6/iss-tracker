const getISS = async () => {
    const url = 'https://api.wheretheiss.at/v1/satellites/25544'

    const response = await fetch(url);
    const satelliteData = await response.json();

    return satelliteData;
}

export default getISS;