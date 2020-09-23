import React from 'react';

import style from './SearchWrapper.module.css'

class SearchWrapper extends React.Component {


    render() {
        return (
            <div className={style.wrapper} >
                <div><h1>FIND YOUR MOVIE</h1> <button className={style.addButton}>+ADD MOVIE</button></div>
                <div className={style.searchContainer}>
                    <input type="text" name="name" />
                    <button className={style.searchButton}>+ADD MOVIE</button>
                </div>
            </div>
        );
    };
}

export default SearchWrapper;