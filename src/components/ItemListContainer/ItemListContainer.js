import React, {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const {segmentId} = useParams();  

    useEffect(() => {
        setLoading(true)
        fetch("https://challenge.agenciaego.tech/api/models/?format=json")
            .then(res => res.json())
            .then((resp) => {
                if(!segmentId) {
                    setProducts(resp)
                } else {
                    setProducts (resp.filter( prod => prod.segment === segmentId))
                }
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
                    : <ItemList items={products}/>
            }
        </>
    )
}
