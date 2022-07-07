import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Ciudad from './components/Ciudad.jsx'


function App() {
  
  const [cities, setCities] = useState([])

  const apiKey

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
          const ciudad = {
          min: Math.round(recurso.main.temp_min),            max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });

  }
  
  function onClose (id){
    setCities(previousState => previousState.filter(city => city.id !== id))
  }
  

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">

      <Route exact path='/' render={() => <SearchBar onSearch={onSearch}/>}/>

      <Route 
        path='/' 
        exact
        render={() => <Cards 
          cities={cities} 
          onClose={onClose}
          />}
        />

      <div>
        <Route exact path='/ciudad/:ciudadId' 
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />} 
        />
      </div>

    </div>
  );
}

export default App;
