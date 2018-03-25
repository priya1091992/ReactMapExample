import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Header extends Component {
  render () {
    const { reset } = this.props
    return (
      <div className="header">
        <span> Header </span>
        <a className="reset" onClick={reset}> Reset </a>
      </div>
    )
  }
}

Header.propTypes = {
  reset: PropTypes.func,
};

export default Header
