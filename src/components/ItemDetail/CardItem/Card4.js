import React from 'react'
import manual from './Manual.png'
import './CardItem.css'

export const Card4 = () => {
  return (
    <div className='specsCard'>
        <img src={manual} />
        <h3>Transmisión manual</h3>
        <p>Posibilidad de elección de caja automática de  manejo.</p>
    </div>
  )
}