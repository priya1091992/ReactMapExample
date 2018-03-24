import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class MapMarker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color } = this.props;
    let divStyle = {
      borderColor: color
    }

    return (
       <div className="greatPlaceStyle" style={divStyle}>
          {this.props.text}
       </div>
    );
  }
}

MapMarker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  color: PropTypes.string
}
