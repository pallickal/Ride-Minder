import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import RideMinder from './components/RideMinder'
import Home from './components/Home'
import VehicleForm from './components/VehicleForm'
import NewVehicle from './components/NewVehicle'
import Vehicle from './components/Vehicle'
import Vehicles from './components/Vehicles'

module.exports = { RideMinder, Home, Vehicles, Vehicle, VehicleForm, NewVehicle };
