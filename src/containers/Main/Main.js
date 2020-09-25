import React from 'react';

import { getMovies } from '../../core/api';

import Header from '../../components/Header/Header';
import ErrorBoundary from '../../components/Error/ErrorBoundary';
import CreateMoviesConatiner from '../../components/MoviesContainer/CreateMoviesConatiner';
import ResultCount from '../../components/ResultCount/ResultCount';
import ResultFilter from '../../components/ResultFilter/ResultFilter';

import AddModal from './AddModal/AddModal';
import EditModal from './EditModal/EditModal';


import { moviesData, genreData } from '../../assets/ImagesData';

class Main extends React.Component {
    state = {
        showAddModal: false,
        showEditModal: false
    };

    async componentDidMount() {
        const movies = await getMovies();
        console.log(movies);
    }

    handleOpenAddModal = () => {
        this.setState({ showAddModal: true });
    }
    handleCloseAddModal = () => {
        this.setState({ showAddModal: false });
    }


    handleOpenEditModal = () => {
        this.setState({ showEditModal: true });
    }
    handleCloseEditModal = () => {
        this.setState({ showEditModal: false });
    }

    render() {
        return (
            <ErrorBoundary>
                <Header   handleOpenAddModal={this.handleOpenAddModal}
                        handleOpenEditModal={this.handleOpenEditModal}/>
                <main>
                    <ResultFilter genreData={genreData} />
                    <ResultCount count={moviesData.length} />
                    <CreateMoviesConatiner moviesData={moviesData} />
                    <AddModal
                        showModal={this.state.showAddModal}
                        handleCloseModal={this.handleCloseAddModal}
                    />
                    <EditModal
                        showModal={this.state.showEditModal}
                        handleCloseModal={this.handleCloseEditModal}
                    />
                </main>
            </ErrorBoundary>
        )
    }
}

export default Main;