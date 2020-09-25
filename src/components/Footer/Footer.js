import React from 'react';

import style from './Footer.module.css';

class Footer extends React.PureComponent {
    render() {
        return (
            <footer className={style.footer}>
                <h4>
                    <strong>netflixа</strong>roulette
                </h4>
            </footer>
        )
    }
}

export default Footer;