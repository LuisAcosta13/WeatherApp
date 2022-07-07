import React from "react";
import c from './Ciudad.module.css'
import {Link} from 'react-router-dom'

export default function Ciudad({city}) {
    return (
        <div className='ciudad'>
                <div className={`${c.container}`}>
                    <h2>Condiciones climatológicas en {city.name}</h2>
                    <Link to={`/`}>
                    <div className={`${c.info}`}>
                        <p>Click en la tarjeta para volver</p>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                    </Link>
                </div>
                
        </div>
    )
}