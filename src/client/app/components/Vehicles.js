import React from 'react';
import { connect } from 'react-redux';
import VehicleForm from './VehicleForm'
import Vehicle from './Vehicle'


let Vehicles = React.createClass({
  render: function() {
    var vehicleNodes = this.props.vehicles.map(
      (vehicle, index) => { return (<Vehicle key={index} {...vehicle} />) }
    );
    return (
      <div>
      <VehicleForm onSubmit={ this.props.onSubmitVehicleForm }/>
      <h1>Vehicle List</h1>
      {vehicleNodes}
      {this.props.children}
      </div>
    );
  }
});

const mapVehiclesStateToProps = (state) => {
  return {
    vehicles: state
  }
};

const mapVehiclesDispatchToProps = (dispatch) => {
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

Vehicles = connect(mapVehiclesStateToProps, mapVehiclesDispatchToProps)(Vehicles);

export default Vehicles;
