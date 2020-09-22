import React from 'react';

import PropTypes, { element } from 'prop-types';

import style from './ResultFilter.module.css'

class ResultFilter extends React.Component {
    constructor(props) {
        super(props)
        this.genreArray = props.genreData;
    }

    createOneItem(elem, index) { return <li className={style.element} key={index}>{elem}</li> };

    RouteItem() { return this.genreArray.map(this.createOneItem) };

    render() {
        return (
            <div className={style.wrapper} >
                <ul className={style.genreContainer}>{this.RouteItem()}</ul>
                <div className={style.sortContainer}><span>SORT BY</span><span className={style.releaseDate}>REALASE DATE</span> <div className={style.triangleDown}></div></div>
            </div>
        );
    };
}

ResultFilter.propTypes = {
    genreData: PropTypes.array.isRequired
}

export default ResultFilter;