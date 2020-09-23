import React from 'react';

import Main from './containers/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import style from './App.module.css';

class App extends React.PureComponent {
    render() {
        return (
            <div className={style.app}>
                <Header/>
                <Main />
                <Footer />
            </div>)
    }
}

export default App;