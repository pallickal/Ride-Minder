import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import VehicleForm from './VehicleForm'
import Vehicle from './Vehicle'


let Vehicles = React.createClass({
  render: function() {
    let vehicleLinks = (
      <ul>
      {
        this.props.vehicles.map(
          (vehicle, index) => (
            <li key={vehicle.id}><Link to={`/vehicle/${vehicle.id}`}>
            {vehicle.year} {vehicle.make} {vehicle.model}
            </Link></li>
          )
        )
      }
      </ul>
    );

    return (
      <div>
      <h1>Vehicle List</h1>
      {vehicleLinks}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles
  }
};

Vehicles = connect(mapStateToProps)(Vehicles);

export default Vehicles;
