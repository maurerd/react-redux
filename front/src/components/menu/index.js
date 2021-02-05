import React from 'react';
import { useSelector } from 'react-redux';

function Menu() {
    const stateSinger = useSelector((state) => state.singerReducer.singer
    )

    return (
        <div>{stateSinger}</div>
    )
}

export default Menu;