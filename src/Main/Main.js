import React from 'react';

import ErrorBoundary from '../Error/ErrorBoundary';

import Items from './ItemGroup/ItemGroup';
import ResultCount from './ResultCount/ResultCount';
import ResultFilter from './ResultFilter/ResultFilter';
import SearchWrapper from './SearchWrapper/SearchWrapper';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.itemsData = props.itemsData;
        this.genreData = props.genreData;
    }
    render() {
        return (
            <ErrorBoundary>
                <>  <SearchWrapper />
                    <ResultFilter genreData={this.genreData} />
                    <ResultCount count={this.itemsData.length} />
                </>
                <Items itemsData={this.itemsData} />
            </ErrorBoundary>
        )
    }
}

export default Main;