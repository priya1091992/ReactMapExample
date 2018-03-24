import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import csv from 'csv';

import Header from './../../component/Header/index';
import Footer from './../../component/Footer/index';
import SimpleMapPage from './../../component/Map/index';
import ColumnModal from './../ColumnModal/index';
import { setMapData, resetApp } from './../../actions/app.action';
import './style.scss';

export class ProductDetail extends Component {
  constructor() {
    super()
    this.state = {
      files: [],
      mapData: [],
      getFile: false
    }
  }

  onDrop = (e) => {
    if(e[0] && e[0].name.includes('.csv')) {
      this.setState({
        files: e,
        getFile: true
      });
    } else {
      alert("Please enter a csv file only");
    }
  }

  getLocation = (mapData) => {
    const { setMapCompleteData } = this.props
    let geocoder = new google.maps.Geocoder();
    let completeAddress
    let latLng = []
    for(let data of mapData) {
      completeAddress = `${data.state}, ${data.city}, ${data.zip}, ${data.address}`
      geocoder.geocode({ 'address': completeAddress}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          latLng.push({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
            category: data.category
          })
          setMapCompleteData(latLng);
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.columns !== nextProps.columns && nextProps.columns.length>0) {
      const reader = new FileReader();
      reader.onload = () => {
        csv.parse(reader.result, {columns: nextProps.columns, to: 20}, (err, data) => {
          if (data) {
            this.getLocation(data)
            this.setState({
              mapData: data
            })
          } else {
            alert("Please confirm that you selected csv with 5 columns only. Please try again!")
          }
        })
      }
      reader.readAsBinaryString(this.state.files[0])
    }
  }

  clearData = () => {
    this.props.reset()
    this.setState({
      files: '',
      mapData: [],
      getFile: false
    })
  }

  render () {
    const { files, mapData, getFile } = this.state
    const { columns, map, mapCenter } = this.props
    let isContainsData = Object.keys(map).length


    const renderMap = isContainsData != 0 ? <SimpleMapPage mapContent={map} center={mapCenter}/> : null

    let uploadSection = null
    if (isContainsData == 0) {
      let retrieveColumn = getFile ? (
        <div>
          <span> Please enter the correct column names of csv file by clicking </span>
          <ColumnModal />
        </div>
      ) : null

      uploadSection = ( <div className="main-content">
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>click to select csv format to upload.</p>
          </Dropzone>
        </div>
        <ul>
        {
          this.state.files && this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
        }
        </ul>
        {retrieveColumn}
      </div> )
    }

    return (
      <div className="container">
        <Header reset={this.clearData} />
        {uploadSection}
        {renderMap}
        <Footer />
      </div>
    )
  }
}

ProductDetail.propTypes = {
  columns: PropTypes.array.isRequired,
  map: PropTypes.object.isRequired,
  reset: PropTypes.func,
  mapCenter: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  columns: state.AppReducer.columns,
  map: state.AppReducer.map,
  mapCenter: state.AppReducer.center
});


const bindAction = (dispatch) => ({
  setMapCompleteData: (data) => dispatch(setMapData(data)),
  reset: () => dispatch(resetApp())
});

export default connect(mapStateToProps, bindAction)(ProductDetail);
