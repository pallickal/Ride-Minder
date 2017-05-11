import React from 'react';
import { connect } from 'react-redux';

let Vehicle = React.createClass({
  getInitialState () {
    return {
      _id: null,
      currentVehicle: null
    }
  },
  fetchVehicle () {
    const matchingVehicle = this.props.vehicles.find(
      (vehicle) => (vehicle.id == this.props.params._id)
    );
    this.setState({currentVehicle : matchingVehicle});
  },
  componentDidMount () {
    this.fetchVehicle()
  },
  componentDidUpdate (prevProps) {
    let oldId = prevProps.params._id
    let newId = this.props.params._id
    if (newId !== oldId)
      this.fetchVehicle()
  },
  render: function() {
    const vehicle = this.state.currentVehicle;
    if (!vehicle) return (<div></div>);
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

const mapStateToProps = (state) => {
  return {
    vehicles: state
  }
};

Vehicle = connect(mapStateToProps)(Vehicle);

export default Vehicle;
