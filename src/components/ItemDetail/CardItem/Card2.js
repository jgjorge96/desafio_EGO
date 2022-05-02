import React from 'react'
import suspension from './Suspension.png'
import './CardItem.css'

export const Card2 = () => {
  return (
    <div className='specsCard'>
        <img src={suspension} />
        <h3>Suspensión mejorada</h3>
        <p>Mayor confort de marcha, estabilidad y capacidad Off Road.</p>
    </div>
  )
}