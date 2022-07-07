import React, {useState} from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState('')

  function handleInputChange(e) {
    setCity(e.target.value)
  }

  return (

  <div>
    <p className={`${s.title}`}>
      My First Weather App
    </p>
    <div className={`${s.bar}`}>
      <input 
        className={`${s.input}`} 
        id='input' 
        type='text' 
        placeholder='Ciudad...' 
        value={city}
        onChange={handleInputChange}>

      </input>
      <button 
        className={`${s.button}`} 
        onClick={() => {onSearch(city); setCity('')}}>
          Agregar
      </button>
    </div>
  </div>
  )
};
