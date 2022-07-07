import React from 'react';
import {Link} from 'react-router-dom'
import s from './Card.module.css'

export default function Card({min, max, name, img, onClose, id}) {

  return (
    
  <div className={`${s.card}`}>
    
    <div className={`${s.content}`}>
      <Link to={`/ciudad/${id}`}>
        <p className={`${s.city}`}>{name}</p>
      </Link>
      <button className={`${s.button}`} onClick={() => onClose(id)}>X</button>
      
      <div className={`${s.temp_min}`}>
        <p className={`${s.min}`}>Min</p> 
        <p>{min}° </p>
        </div>
      <div className={`${s.temp_max}`}>
        <p className={`${s.max}`}>Max </p> 
        <p>{max}°</p> 
      </div>

      <img className={`${s.img}`} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={'img'}/>
    </div>
  </div>
  )
};