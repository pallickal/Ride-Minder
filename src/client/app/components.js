import React from 'react';
import { Link } from 'react-router';
import VehicleForm from './components/VehicleForm'
import store from './store.js';

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

const Vehicles = React.createClass({
  componentDidMount: function() {
    this.unsubscribe = store.subscribe( () => this.forceUpdate() );
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
  render: function() {
    console.log('in Vehicles render');

    const state = store.getState();

    console.log(state);
    var vehicleNodes = state.map(
      (vehicle, index) => {	return (<Vehicle key={index} {...vehicle} />) }
    );
    return (
      <div>
      <h1>Vehicle List</h1>
      {vehicleNodes}
      {this.props.children}
      </div>
    );
  }
});

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
