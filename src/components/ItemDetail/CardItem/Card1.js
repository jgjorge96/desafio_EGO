import React from 'react'
import motor from './Motor.png'
import './CardItem.css'

export const Card1 = () => {
  return (
    <div className='specsCard'>
        <img src={motor} />
        <h3>Nuevos motores Toyota</h3>
        <p>Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).</p>
    </div>
  )
}
