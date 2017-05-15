import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Nav from './components/Nav'
import Home from './components/Home'
import VehicleForm from './components/VehicleForm'
import NewVehicle from './components/NewVehicle'
import Vehicle from './components/Vehicle'
import Vehicles from './components/Vehicles'

module.exports = { Nav, Home, Vehicles, Vehicle, VehicleForm, NewVehicle };
