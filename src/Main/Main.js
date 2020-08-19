import React from 'react';

import ErrorBoundary from '../Error/ErrorBoundary';

import Items from './ItemGroup/ItemGroup';
import ResultCount from './ResultCount/ResultCount';

const Main = (props) => {
    const { itemsData } = props;
    return (
        <ErrorBoundary>
            <ResultCount />
            <Items itemsData={itemsData} />
        </ErrorBoundary>
    )
}

export default Main;