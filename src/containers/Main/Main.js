import React from 'react';

import { getMovies } from '../../core/api';

import ErrorBoundary from '../../components/Error/ErrorBoundary';
import Items from '../../components/ItemGroup/ItemGroup';
import ResultCount from '../../components/ResultCount/ResultCount';
import ResultFilter from '../../components/ResultFilter/ResultFilter';
import SearchWrapper from '../../components/SearchWrapper/SearchWrapper';

import AddModal from './AddModal/AddModal';
import EditModal from './EditModal/EditModal';


import { filmsData, genreData } from '../../assets/ImagesData';

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
                <SearchWrapper
                    handleOpenAddModal={this.handleOpenAddModal}
                    handleOpenEditModal={this.handleOpenEditModal}
                />
                <ResultFilter genreData={genreData} />
                <ResultCount count={filmsData.length} />
                <Items itemsData={filmsData} />
                <AddModal
                    showModal={this.state.showAddModal}
                    handleCloseModal={this.handleCloseAddModal}
                />
                <EditModal
                    showModal={this.state.showEditModal}
                    handleCloseModal={this.handleCloseEditModal}
                />
            </ErrorBoundary>
        )
    }
}

export default Main;