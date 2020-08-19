import React from 'react';

import PropTypes from 'prop-types';

class ResultCount extends React.Component {
    constructor(props) {
        super(props);
        this.count = props.count;
    }
    render() {
        return (
            <div>
                <span>{this.count} movies found</span>
            </div>
        )
    }
}

ResultCount.propTypes = {
    count: PropTypes.number.isRequired
}

export default ResultCount;