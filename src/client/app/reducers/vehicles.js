import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';

let curr_vehicle_id = 1;

const vehicles =  (state = [], action) => {
  console.log('adding vehicle!');
  switch(action.type) {
    case 'ADD_VEHICLE':
      console.log(        {
                id: curr_vehicle_id + 1,
                vin: action.vin,
                make: action.make,
                model: action.model,
                trim: action.trim,
                year: action.year,
                km: action.km,
                fuelings: [
                  {
                    date: '04/22/2016',
                    km: 57077,
                    currency: 'US',
                    units: 'gallons',
                    cost_per_unit: 2.73,
                    units_volume: 23.47,
                    tank_filled: true
                  }
                ]
              }
);
      return [
        ...state,
        {
          id: curr_vehicle_id++,
          vin: action.vin,
          make: action.make,
          model: action.model,
          trim: action.trim,
          year: action.year,
          km: action.km,
          fuelings: [
            {
              date: '04/22/2016',
              km: 57077,
              currency: 'US',
              units: 'gallons',
              cost_per_unit: 2.73,
              units_volume: 23.47,
              tank_filled: true
            }
          ]
        }
      ];
    default:
      return state;
  }
}

export default vehicles;
