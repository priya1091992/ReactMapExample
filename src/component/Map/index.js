import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleMap from 'google-map-react';
import MapMarker from './marker.js';
import './style.scss';

const markerColor = [
  'red',
  'green',
  'blue',
  'black',
  'orange',
  'pink',
  'purple',
  'yellow',
  'grey',
]

function createMapOptions(maps) {
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}

export default class SimpleMapPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mapContent, center, zoom } = this.props;
    let borderColor
    const mapMarker = mapContent && Object.keys(mapContent).map((key, i) => {
      borderColor = markerColor[i]
      return mapContent[key].map((content) => {
        return (
          <MapMarker {...content} color={borderColor}/>
        )
      })
    })

    return (
      <div className='google-map'>
       <GoogleMap
        apiKey={'AIzaSyDbZ8B6TSTlfGRroPE9Gp9nOIZ0OZdmXHE'}
        center={center}
        zoom={zoom}
        options={createMapOptions}>
        {mapMarker}
      </GoogleMap>
      </div>
    );
  }
}

SimpleMapPage.defaultProps = {
  center: [18.1795263, -66.7542171],
  zoom: 9
}

SimpleMapPage.propTypes =   {
  mapContent: PropTypes.object.isRequired,
  mapCenter: PropTypes.array.isRequired
}
