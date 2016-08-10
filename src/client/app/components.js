import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import VehicleForm from './components/VehicleForm'

const Vehicle = React.createClass({
  render: function() {
    return (
      <div>
        <h2> {this.props.year} {this.props.make} {this.props.model} </h2>
        {this.props.km} miles
        <p>{this.props.vin}</p>
      </div>
    );
  }
});

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

const VehicleDetails = React.createClass({
  render: function() {
    return (
      <div>
        Vehicle Details.
      </div>
    );
  }
});

const Home = React.createClass({
  render: function() {
    console.log('in Home component render!!');
    return (
      <div>
        Welcome to Ride Minder! A place to track, organize, and plan for the maintenance, repair, and build of your vehicle.
        <ul>
          <li>Calculate fuel economy and running costs</li>
          <li>Set a maintenance schedule and get reminders when due</li>
          <li>File expenses under documentation for maintenance, repair, and build items</li>
          <li>Document receipts and work progression with photo and video</li>
          <li>Bookmark/cache online references and PDF manuals while planning maintenance, repairs, or builds</li>
          <li>Plan and estimate future maintenance, repair, and build costs</li>
        </ul>
      </div>
    );
  }
});

const RideMinder = React.createClass({
  render: function() {
    console.log('in RideMinder component render!!');
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/vehicles"> Vehicles </Link>
          <Link to="/create"> Create </Link>
        </div>
        Welcome to Ride Minder.
        {this.props.children}
      </div>
    );
  }
});

module.exports = { RideMinder, Home, Vehicles, Vehicle, VehicleForm, VehicleDetails };
