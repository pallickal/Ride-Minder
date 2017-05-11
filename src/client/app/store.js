import { createStore } from 'redux';
import vehicles from './reducers/vehicles';

const store = createStore(vehicles);

store.dispatch({
  type: 'ADD_VEHICLE',
  vin: '1JZ2093KS20320931',
  make: 'Honda',
  model: 'Odyssey',
  trim: 'Touring Elite',
  year: 2013,
  km: 4500
});
store.dispatch({
  type: 'ADD_VEHICLE',
  vin: '1JZ2093KS20320931',
  make: 'Subaru',
  model: 'Outback',
  trim: 'Limited',
  year: 2010,
  km: 120320
});
store.dispatch({
  type: 'ADD_VEHICLE',
  vin: '1JZ2093KS20320931',
  make: 'Honda',
  model: 'Accord',
  trim: 'EX',
  year: 2007,
  km: 138309
});
store.dispatch({
  type: 'ADD_VEHICLE',
  vin: '1JZ2093KS20320931',
  make: 'Mercedes Benz',
  model: 'C230 Kompressor',
  trim: '',
  year: 2007,
  km: 138309
});
store.dispatch({
  type: 'ADD_VEHICLE',
  vin: '1JZ2093KS20320931',
  make: 'Acura',
  model: 'Integra',
  trim: 'LS',
  year: 1997,
  km: 57383
});

export default store;
