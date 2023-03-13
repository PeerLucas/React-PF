import Item from '../Item';
import React from 'react';
import './itemlist.css'

const ItemList = ({data =[]}) =>{
    return(
        data.map(film => <Item key={film.id} info={film}/>)
    );
}

export default ItemList;