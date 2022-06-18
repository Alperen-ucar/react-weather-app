import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

export const AppProvider = ({children}) => {
    const [city, setCity] = useState();
    const [name, setName] = useState("Adana");
    const [data, setData] = useState({list: [{lat: 36.98615, lon: 35.32531, name: 'Adana'}, 
    {lat: 39.91987, lon: 32.85427, name: 'Ankara'}, {lat: 40.19559, lon: 29.06013, name: 'Bursa'}, 
    {lat: 38.41885, lon: 27.12872, name: 'İzmir'}, {lat: 41.01384, lon: 28.94966, name: 'İstanbul'}]});
    

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
    
    const values = {
        city,
        setCity,
        data,
        setData,
        name,
        setName,
    }
    return <MyContext.Provider value={values}>{children}</MyContext.Provider>
}

export default MyContext;