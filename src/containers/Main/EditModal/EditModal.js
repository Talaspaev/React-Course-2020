import React from 'react';

import Modal from '../../../components/Modal/Modal';

class EditModal extends React.Component {

    render() {
        return (
            <Modal
                contentLabel="Edit Modal"
                showModal={this.props.showModal}
                handleCloseModal={this.props.handleCloseModal}
            >
                Edit Modal
            </Modal>
        )
    }
}

export default EditModal;