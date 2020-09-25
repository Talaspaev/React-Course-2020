import React from 'react';

import style from './createOneMovie.module.css';

const createOneMovie = ({ image, title, releaseDate, genre }, index) => {
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

export default createOneMovie;