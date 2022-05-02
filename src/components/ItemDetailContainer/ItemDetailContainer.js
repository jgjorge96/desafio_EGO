import React, {useState, useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState ()
    const [loading, setLoading] = useState(false)

    const { carId } = useParams()

    useEffect(() => {
        setLoading (true)
        fetch("https://challenge.agenciaego.tech/api/models/?format=json")
            .then(res => res.json())
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(carId)) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [carId])

  return (
    <>
        {
            loading
            ? <Spinner animation='border' size='lg'/>
            : <ItemDetail {...item}/>
        }
    </>
  )
}
