import React from 'react';

import GetItem from './Item/getItem';

import style from './ItemGroup.module.css';

const ItemGroup = (props) => {
    const { itemsData } = props;
    return (<div className={style.wrapper}><GetItem itemsData={itemsData} /></div>)
};

export default ItemGroup;