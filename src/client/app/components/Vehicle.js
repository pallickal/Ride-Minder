import React from 'react';
import { connect } from 'react-redux';

let Vehicle = React.createClass({
  render: function() {
    const vehicle = this.props.vehicle;
    if (!vehicle) return (<div>Vehicle not found!</div>);
    return (
      <div>
        <h2> {vehicle.year} {vehicle.make} {vehicle.model} </h2>
        <p>Year: {vehicle.year}</p>
        <p>Make: {vehicle.make}</p>
        <p>Model: {vehicle.model}</p>
        <p>Trim: {vehicle.trim}</p>
        <p>Miles: {vehicle.miles}</p>
        <p>VIN: {vehicle.vin}</p>
      </div>
    );
  }
});

const mapStateToProps = (state, parentProps) => {
  const matchingVehicle = state.find(
    (vehicle) => (vehicle.id == parentProps.params._id)
  );
  return {
    vehicle: matchingVehicle
  };
};

Vehicle = connect(mapStateToProps)(Vehicle);

export default Vehicle;
