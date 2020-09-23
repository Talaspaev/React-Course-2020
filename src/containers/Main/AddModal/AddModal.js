import React from 'react';

import Modal from '../../../components/Modal/Modal';

class AddModal extends React.Component {

    render() {
        return (
            <Modal
                contentLabel="Add Modal"
                showModal={this.props.showModal}
                handleCloseModal={this.props.handleCloseModal}
            >
                Add Modal
            </Modal>
        )
    }
}

export default AddModal;