import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Modal extends React.Component {
  render() {
    const { show, onClose, children, onSubmit } = this.props
    if (!show) {
      return null
    }
    return (
      <div className="backdrop">
        <div className="modal">
          <div className="close">
            <a onClick={onClose}>
              Close
            </a>
          </div>
          {children}
          <div className="submit">
            <button onClick={onSubmit} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
