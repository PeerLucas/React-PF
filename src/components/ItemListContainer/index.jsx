
import ItemList from '../ItemList';
import React, { useState, useEffect } from 'react';
import Title from '../Title';
import { useParams } from 'react-router-dom';

import {getFirestore, collection, getDocs} from 'firebase/firestore';


export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const {artistasId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const querycollection = collection(querydb, 'productos');
        getDocs (querycollection)
        .then(res => setData(res.docs.map(producto => ({id:producto.id, ...producto.data() }))))

    }, [artistasId])

    return (
        <>
            <Title greeting={texto} />
            <ItemList data={data} />
        </>


    );
}

export default ItemListContainer;