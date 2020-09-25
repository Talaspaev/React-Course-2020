import React from 'react';

import createOneMovie from './createOneMovie/createOneMovie';

class MoviesList extends React.Component {
    state = {
        movies: this.props.moviesData
    };

    render() {
        return (
            this.state.movies.map(createOneMovie)
        );
    };
}

export default MoviesList;
