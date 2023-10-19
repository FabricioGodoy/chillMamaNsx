import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardGamerMAPDetail } from './cardGamerDetail/cardGamerMAPDetail';
import { RequestAllProducts } from '../../helpers/requestAllProducts';

export const CardGamersDetail = () => {
    const [loading, setLoading] = useState(false)
    const [producto, setProducto] = useState([])
    const { catId } = useParams()

    useEffect(() => {
        setLoading(true)
        RequestAllProducts()
            .then((resp) => {
                if (!catId) {
                    setProducto(resp)
                } else {
                    setProducto(resp.filter(articulo => articulo.id == catId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])
    return (
        <>
            {loading 
                ? <p>Loading..</p> 
                : <CardGamerMAPDetail producto={producto[0]}/>
            }
        </>
    )
}
