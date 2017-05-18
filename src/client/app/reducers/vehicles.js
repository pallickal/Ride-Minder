import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';

let curr_vehicle_id = 1;

const vehicles =  (state = [], action) => {
  switch(action.type) {
    case 'ADD_VEHICLE':
      return [
        ...state,
        {
          id: curr_vehicle_id++,
          vin: action.vin,
          make: action.make,
          model: action.model,
          trim: action.trim,
          year: action.year,
          miles: action.miles
        }
      ];
    default:
      return state;
  }
};

export default vehicles;
