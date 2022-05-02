import React from 'react'
import automatica from './Automatica.png'
import './CardItem.css'

export const Card3 = () => {
  return (
    <div className='specsCard'>
        <img src={automatica} />
        <h3>Transmisión automática</h3>
        <p>Posibilidad de elección de caja automática de  manejo.</p>
    </div>
  )
}