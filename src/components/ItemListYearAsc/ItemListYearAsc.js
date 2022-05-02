import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const ItemListYearAsc = () => {
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);
    const {segmentId} = useParams();  

    useEffect(() => {   
        setLoading(true)
        fetch("https://challenge.agenciaego.tech/api/models/?format=json")
            .then(res => res.json())
            .then((resp) => { setOrder (resp.sort(((a,b) => (a.year - b.year))))
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
                    : <ItemList items={order}/>
            }
        </>
    )
}
