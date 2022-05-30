import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState();
  const [data, setData] = useState({list: [{lat: 36.98615, lon: 35.32531, name: 'Adana'}, 
  {lat: 39.91987, lon: 32.85427, name: 'Ankara'}, {lat: 40.19559, lon: 29.06013, name: 'Bursa'}, 
  {lat: 38.41885, lon: 27.12872, name: 'İzmir'}, {lat: 41.01384, lon: 28.94966, name: 'İstanbul'}]});
  const [name, setName] = useState("Adana");

  let lat = data.list[0].lat;
  let lon = data.list[0].lon;
  
  for (let i = 0; i < 5; i++) {
    if (data.list[i].name == name) {
      lat = data.list[i].lat;
      lon = data.list[i].lon;
    }
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a479a33564e9d75427955e4ae9eee58b`)
    .then((response) => setCity(response.data))
  
  }, [name]);

  if(!city) return null;
  
  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <select onChange={(e) => handleChange(e)}>
        <option value="Adana">Adana</option>
        <option value="Ankara">Ankara</option>
        <option value="Bursa">Bursa</option>
        <option value="İzmir">İzmir</option>
        <option value="İstanbul">İstanbul</option>
      </select>
      <hr />
      <h1 style={{textAlign: 'center'}}>{city.city.name}</h1> 
      <Card city={city} />
    </div>
  );
}

export default App;
