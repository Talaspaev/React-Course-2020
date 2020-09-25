import React from 'react';

import style from './createOneGenre.module.css';

const createOneGenre = (elem, index)=> <li className={style.element} key={index}>{elem}</li> ;

export default createOneGenre;