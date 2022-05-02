import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const ItemsCars = () => {
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const {segmentId} = useParams();  

    useEffect(() => {
        setLoading(true)
        fetch("https://challenge.agenciaego.tech/api/models/?format=json")
            .then(res => res.json())
            .then((resp) => { setCars (resp.filter( prod => prod.segment.includes('Sedan') || prod.segment.includes('Hatchback')))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [segmentId])
      
    return (
        <>
            {
                loading
                    ? <Spinner animation='border' size='lg'/>
                    : <ItemList items={cars}/>
            }
        </>
    )
}
