import React from 'react';

import style from './SearchWrapper.module.css'

class SearchWrapper extends React.Component {


    render() {
        return (
            <div className={style.wrapper} >
                <div><h1>FIND YOUR MOVIE</h1>
                <button onClick={this.props.handleOpenAddModal} className={style.addButton}>ADD MOVIE</button></div>
                <div className={style.searchContainer}>
                    <input type="text" name="name" />
                    <button onClick={this.props.handleOpenEditModal} className={style.searchButton}>SEARCH</button>
                </div>
            </div>
        );
    };
}

export default SearchWrapper;