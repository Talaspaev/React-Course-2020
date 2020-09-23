import React from 'react';

import style from './Header.module.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className={style.title}>
                    <h4>
                        <strong>netflixа</strong>
                    </h4>
                    <h4> roulette</h4>
                </div>
            </header>
        )
    }
}

export default Header;