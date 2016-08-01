import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { RideMinder, Home, Vehicles, Vehicle, VehicleDetails, VehicleForm } from './components.js';
import store from './store.js';


var routes = (
  <Route path="/" component={RideMinder}>
    <IndexRoute component={Home} />
    <Route path="/vehicleDetails/:_id" component={VehicleDetails} />
    <Route path="vehicles" component={Vehicles} />
    <Route path="vehicle" component={Vehicle} />
    <Route path="create" component={VehicleForm} />
  </Route>
);

var renderApp = () => {
  console.log("in render!!");
  render((<Router>{routes}</Router>), document.getElementById('app'));
}

renderApp();

store.subscribe(renderApp);
console.log('it works!');
