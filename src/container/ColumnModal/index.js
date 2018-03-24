import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from './../../component/Modal/index';
import { setColumnData } from './../../actions/app.action';
import {
  duplicateValidation,
  rangeValidation
} from './../../libs/genericFunctions';
import './style.scss';

class ColumnModal extends Component {
  constructor(props) {
    super(props);
      this.state = {
      isOpen: false,
      selectedColumns: [],
      range: [
         {id: 'Column 1', value: ''},
         {id: 'Column 2', value: ''},
         {id: 'Column 3', value: ''},
         {id: 'Column 4', value: ''},
         {id: 'Column 5', value: ''}
       ]
    };
  }

 toggleModal = () => {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

 submitData = () => {
   const { setData } = this.props
   let rangeValue = true
   let values = this.state.range.map((data) => data.value)
   let duplicateValue = duplicateValidation(values)

   const expectedArray = ['state', 'zip', 'category', 'city', 'address']
   rangeValue = rangeValidation(values, expectedArray)

   if (!rangeValue) {
     alert("Please enter all values")
   } else if (duplicateValue) {
      alert("Please enter unique values")
   } else {
     this.setState({
       isOpen: !this.state.isOpen
     });
     setData(this.state.range)
   }
 }

 setInputData = (i, e) => {
   let rangeCopy = [...this.state.range]
   rangeCopy.forEach((data) => {
     if(data.id === i) {
       data.value = e.target.value.toLowerCase();
     }
   })
   this.setState({
     range: [...rangeCopy]
   })
 }

 render() {
   const {inputData, range} = this.state
   let rangeID = 1
    let userSelection = range.map((data, i) => {
      return (
        <div key={i}>
          <label> {data.id} </label>
           <input
             type="text"
             onChange={(e) => this.setInputData(data.id, e)}
             value={data.value.toUpperCase()}
             placeholder="-------"
           />
         </div>
       )
     })

   return (
     <div className="modal-container">
       <a onClick={this.toggleModal}>
         here
       </a>
       <Modal show={this.state.isOpen}
         onClose={this.toggleModal}
         onSubmit={this.submitData}
         >
         {userSelection}
         <div className="note">
          Note: Column name must be one of them: state, city, category, address and zip
         </div>
       </Modal>
     </div>
   )
 }
}

ColumnModal.propTypes = {
 setData: PropTypes.func,
 columns: PropTypes.array,
};

const mapStateToProps = state => ({
  columns: state.AppReducer.columns
});

const bindAction = (dispatch) => ({
  setData: (data) => dispatch(setColumnData(data)),
});

export default connect(mapStateToProps, bindAction)(ColumnModal);
