import { useContext } from 'react'
import MyContext from '../context/AppContext'

function Weather() {
    const {city, setName} = useContext(MyContext);

    const handleChange = (e) => {
        setName(e.target.value);
    }
  return (
    <div>
        <select onChange={(e) => handleChange(e)}>
          <option value="Adana">Adana</option>
          <option value="Ankara">Ankara</option>
          <option value="Bursa">Bursa</option>
          <option value="İzmir">İzmir</option>
          <option value="İstanbul">İstanbul</option>
        </select>
        <hr />
        <h1 style={{textAlign: 'center'}}>{city.city.name}</h1> 
    </div>
  )
}

export default Weather