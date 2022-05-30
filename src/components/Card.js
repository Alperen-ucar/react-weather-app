import React from 'react'

function Card({ city }) {
  return (
    <div>
      <div className='cards'>  
        <div className='card' >
            <div className='cardHead' style={{backgroundColor: 'gray'}}>
                <img src={`http://openweathermap.org/img/w/${city.list[0].weather[0].icon}.png`} style={{backgroundColor: 'gray'}} />
            </div>
            <div className='cardBody' id='first'>
                <span className='main-type'>
                  {city.list[0].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[0].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[0].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>

        <div className='card'>
            <div className='cardHead'>
                <img src={`http://openweathermap.org/img/w/${city.list[1].weather[0].icon}.png`} />
            </div>
            <div className='cardBody'>
                <span className='main-type'>
                  {city.list[1].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[1].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[1].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>

        <div className='card'>
            <div className='cardHead'>
                <img src={`http://openweathermap.org/img/w/${city.list[2].weather[0].icon}.png`} />
            </div>
            <div className='cardBody'>
                <span className='main-type'>
                  {city.list[2].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[2].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[2].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>

        <div className='card'>
            <div className='cardHead'>
                <img src={`http://openweathermap.org/img/w/${city.list[3].weather[0].icon}.png`} />
            </div>
            <div className='cardBody'>
                <span className='main-type'>
                  {city.list[3].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[3].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[3].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>

        <div className='card'>
            <div className='cardHead'>
                <img src={`http://openweathermap.org/img/w/${city.list[4].weather[0].icon}.png`} />
            </div>
            <div className='cardBody'>
                <span className='main-type'>
                  {city.list[4].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[4].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[4].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>

        <div className='card'>
            <div className='cardHead'>
                <img src={`http://openweathermap.org/img/w/${city.list[5].weather[0].icon}.png`} />
            </div>
            <div className='cardBody'>
                <span className='main-type'>
                  {city.list[5].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[5].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[5].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>

        <div className='card'>
            <div className='cardHead'>
                <img src={`http://openweathermap.org/img/w/${city.list[6].weather[0].icon}.png`} />
            </div>
            <div className='cardBody'>
                <span className='main-type'>
                  {city.list[6].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[6].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[6].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>
        
        <div className='card'>
            <div className='cardHead'>
                <img src={`http://openweathermap.org/img/w/${city.list[7].weather[0].icon}.png`} />
            </div>
            <div className='cardBody'>
                <span className='main-type'>
                  {city.list[7].weather[0].main}
                </span>
                <br />
                <span className='max'>
                  {Math.floor(city.list[7].main.temp_max - 273.15)}°
                </span>
                <span className='min'>
                  {Math.floor(city.list[7].main.temp_min - 273.15)}°
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card