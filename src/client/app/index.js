import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { RideMinder, Home, Vehicles, Vehicle, VehicleForm } from './components.js';
import store from './store.js';

var routes = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={RideMinder}>
        <IndexRoute component={Home} />
        <Route path="/vehicle/:_id" component={Vehicle} />
        <Route path="vehicles" component={Vehicles} />
        <Route path="vehicle" component={Vehicle} />
      </Route>
    </Router>
  </Provider>
);

render(routes, document.getElementById('app'));
