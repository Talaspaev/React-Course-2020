import React from 'react';

import style from './getItem.module.css';

class GetItem extends React.Component {
    constructor(props) {
        super(props)
        this.itemsArray = props.itemsData;
    }

    createOneItem({ image, title, releaseDate, genre }, index) {
        return (<div className={style.wrapper} key={index}>
            <div className={style.itemImages}>
                <img src={image} />
            </div>
            <div className={style.textWrapper}>
                <h3>{title}</h3><span className={style.title}>{releaseDate}</span>
            </div>
            <p className={style.p}>{genre}</p>
        </div>)
    };

    RouteItem() { return this.itemsArray.map(this.createOneItem) };

    render() {
        return (
            this.RouteItem()
        );
    };

}

export default GetItem;
