import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from './MoviesList/MoviesList';

import style from './CreateMoviesConatiner.module.css';

class CreateMoviesConatiner extends React.Component {
    state = {
        moviesData: this.props.moviesData,
    };

    render() {
        return (
            <div className={style.wrapper}>
                <MoviesList moviesData={this.state.moviesData} />
            </div>)
    }
}

CreateMoviesConatiner.propTypes = {
    moviesData: PropTypes.array.isRequired
}

export default CreateMoviesConatiner;