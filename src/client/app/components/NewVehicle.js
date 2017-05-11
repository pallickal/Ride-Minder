import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import VehicleForm from './VehicleForm'
import Vehicle from './Vehicle'


let NewVehicle = React.createClass({
  getInitialState: function() {
    return {
      newVehicleAdded: false,
    };
  },
  onSubmitVehicleForm: function(event, formState) {
    this.setState({ newVehicleAdded: true });
    this.props.onSubmitVehicleForm(event, formState);
  },
  renderAddedVehicle: function() {
    if (this.state.newVehicleAdded) {
      let addedVehicle = this.props.vehicles.reduce(
        (addedVehicle, currentVehicle) => {
          return (
            addedVehicle.id < currentVehicle.id ?
            currentVehicle :
            addedVehicle
          );
        }
      );
      addedVehicle = (
        <Link to={`/vehicle/${addedVehicle.id}`}>
        {addedVehicle.year} {addedVehicle.make} {addedVehicle.model}
        </Link>
      );

      return (
        <div>
          <h1>Added Vehicle</h1>
          {addedVehicle}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  },
  render: function() {
    return (
      <div>
      <VehicleForm onSubmit={ this.onSubmitVehicleForm }/>
      { this.renderAddedVehicle() }
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    vehicles: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitVehicleForm: (event, formState) => {
      event.preventDefault(); // necessary with no submit url?
      dispatch({
        type: 'ADD_VEHICLE',
        ...formState
      });
    }
  }
};

NewVehicle = connect(mapStateToProps, mapDispatchToProps)(NewVehicle);

export default NewVehicle;
