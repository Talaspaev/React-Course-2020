import React from 'react';

import SearchWrapper from '../../components/SearchWrapper/SearchWrapper';

import style from './Header.module.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className={style.title}>
                    <h4>
                        <strong>netflixа</strong>roulette
                    </h4>
                    <button onClick={this.props.handleOpenAddModal}
                        className={style.addButton}>ADD MOVIE</button>
                </div>
                <SearchWrapper
                    handleOpenAddModal={this.props.handleOpenAddModal}
                    handleOpenEditModal={this.props.handleOpenEditModal}
                />
            </header>
        )
    }
}

export default Header;