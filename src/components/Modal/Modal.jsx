import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css';

const modalEl = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onModalClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onModalClose);
  }

  onModalClose = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
      return;
    }
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.onModalClose}>
        <div className={css.Modal}>{children}</div>
      </div>,
      modalEl
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
