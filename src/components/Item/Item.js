import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({id, name, segment, year, price, thumbnail, photo}) => {
  return (
            <Card border="light"  className='card1' key={id} style={{marginBottom: "75px"}}>
                    <Card.Body className='cardContainer'>
                        <Card.Title className='cardTitle'>{name}</Card.Title>
                        <Card.Subtitle className="cardSub">{year} | ${price}</Card.Subtitle>
                        <Card.Img className='cardImg' src={thumbnail} alt={name}/>
                        <Link to={`/item/${id}`} className='btnCard'><li>Ver Modelos</li></Link>
                    </Card.Body>
            </Card>
  )
}
