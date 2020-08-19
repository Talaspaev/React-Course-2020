import React from 'react';

import ErrorBoundary from '../Error/ErrorBoundary';

import Items from './ItemGroup/ItemGroup';
import ResultCount from './ResultCount/ResultCount';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.itemsData = props.itemsData;
    }
    render() {
        return (
            <ErrorBoundary>
                <ResultCount count={this.itemsData.length} />
                <Items itemsData={this.itemsData} />
            </ErrorBoundary>
        )
    }
}

export default Main;