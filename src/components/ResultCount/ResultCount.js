import React from 'react';
import PropTypes from 'prop-types';

import style from './ResultCount.module.css'

class ResultCount extends React.Component {
    state = {
        count: this.props.count,
    };

    render() {
        return (
            <div className={style.wrapper}>
                <h3 className={style.count}><strong>{this.state.count}</strong> movies found</h3>
            </div>
        )
    }
}

ResultCount.propTypes = {
    count: PropTypes.number.isRequired
}

export default ResultCount;