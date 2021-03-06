import React from 'react';

import style from './ErrorBoundary.module.css';
import errorImg from '../assets/404.png';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(props) {
        return { hasError: true };
    }
    render () {
        if(this.state.hasError){
            return (<>
            <div className={style.heading}><h1>Page Not Found</h1></div>
            <img src={errorImg}/>
            <div className={style.buttonContainer}><button className={style.button}>GO BACK TO HOME</button></div>
            </>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;