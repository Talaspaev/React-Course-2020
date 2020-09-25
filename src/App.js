import React from 'react';

import Main from './containers/Main/Main';
import Footer from './components/Footer/Footer';

import style from './App.module.css';

class App extends React.PureComponent {
    render() {
        return (
            <div className={style.app}>
                <Main />
                <Footer />
            </div>)
    }
}

export default App;