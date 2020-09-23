import React from 'react';
import ReactModal from 'react-modal';

import style from './Modal.module.css';

class Modal extends React.Component {

    render() {
        return (
            <ReactModal
                ariaHideApp={false}
                isOpen={this.props.showModal}
                contentLabel={this.props.contentLabel}
            >
                {this.props.children}
                <button onClick={this.props.handleCloseModal}>X</button>
            </ReactModal>
        )
    }
}

export default Modal;