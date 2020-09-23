import React from 'react';
import PropTypes from 'prop-types';

import GetItem from './Item/getItem';

import style from './ItemGroup.module.css';

class ItemGroup extends React.Component {
    constructor(props) {
        super(props);
        this.itemsData = props.itemsData;
    }

    render() {
        return (
            <div className={style.wrapper}>
                <GetItem itemsData={this.itemsData} />
            </div>)
    }
}

ItemGroup.propTypes = {
    itemsData: PropTypes.array.isRequired
}

export default ItemGroup;