import React from 'react';

import PropTypes, { element } from 'prop-types';

import style from './ResultFilter.module.css'

class ResultFilter extends React.Component {
    constructor(props) {
        super(props)
        this.genreArray = props.genreData;
    }

    createOneItem(elem, index) { return <li className={style.element} key={index}>{elem}</li>};

    RouteItem() { return this.genreArray.map(this.createOneItem) };

    render() {
        return (
            <ul className={style.wrapper} >{this.RouteItem()}</ul>
        );
    };
}

ResultFilter.propTypes = {
    genreData: PropTypes.array.isRequired
}

export default ResultFilter;