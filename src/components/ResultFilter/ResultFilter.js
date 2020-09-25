import React from 'react';
import PropTypes from 'prop-types';

import createOneGenre from './createOneGenre/createOneMovie';

import style from './ResultFilter.module.css'

class ResultFilter extends React.Component {
    state = {
        genreData: this.props.genreData,
    }
    render() {
        return (
            <div className={style.wrapper} >
                <ul className={style.genreContainer}>
                    {this.state.genreData.map(createOneGenre)}
                </ul>
                <div className={style.sortContainer}><span>SORT BY</span>
                    <span className={style.releaseDate}>REALASE DATE</span>
                    <div className={style.triangleDown}></div></div>
            </div>
        );
    };
}

ResultFilter.propTypes = {
    genreData: PropTypes.array.isRequired
}

export default ResultFilter;