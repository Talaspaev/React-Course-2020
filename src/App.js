import React from 'react';

import CreateFunctionalComponent from './task1/CreateFunctionalComponent';
import CreatePureComponent from './task1/CreatePureComponent';
import CreateComponent from './task1/CreateComponent';
import CreateElement from './task1/CreateElement';

import Main from './Main/Main';
import Footer from './Footer/Footer';

import { filmsData, genreData } from './assets/ImagesData';

import style from './App.module.css';

class App extends React.PureComponent {
    render() {
        return (
            <div className={style.app}>
                <Main itemsData={filmsData} genreData={genreData} />
                <Footer />
            </div>)
    }
}

export default App;