import React from 'react';

import ErrorBoundary from '../../components/Error/ErrorBoundary';
import Items from '../../components/ItemGroup/ItemGroup';
import ResultCount from '../../components/ResultCount/ResultCount';
import ResultFilter from '../../components/ResultFilter/ResultFilter';
import SearchWrapper from '../../components/SearchWrapper/SearchWrapper';


import { filmsData, genreData } from '../../assets/ImagesData';

class Main extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <SearchWrapper />
                <ResultFilter genreData={genreData} />
                <ResultCount count={filmsData.length} />
                <Items itemsData={filmsData} />
            </ErrorBoundary>
        )
    }
}

export default Main;