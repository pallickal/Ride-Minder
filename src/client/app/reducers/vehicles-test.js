import {should} from 'chai';
var expect = require('chai').expect;
import deepFreeze from 'deep-freeze';
// var vehicles = require('./reducers');
import vehicles from './vehicles';

should();

console.log('vehicles is -');
console.log(vehicles);
describe('starwars-names', function() {
  it('should work!', function() {
    expect(true).to.be.true;
  });
});

describe('vehicles reducer', function() {
  it('should return default state', function(done) {
    vehicles(undefined, {}).should.deep.equal([]);
    done();
  });

  it('should add a vehicle', (done) => {
    const state_before = [];
    const state_after = [
      {
        id: 1,
        vin: '1JZ2093KS20320931',
        make: 'Acura',
        model: 'Integra',
        trim: 'LS',
        year: 1997,
        km: 57383,
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

    deepFreeze(state_before);

    const actual_state_after = vehicles(state_before,
      {
        type: 'ADD_VEHICLE',
        vin: '1JZ2093KS20320931',
        make: 'Acura',
        model: 'Integra',
        trim: 'LS',
        year: 1997,
        km: 57383
      }
    );

    actual_state_after.should.deep.equal(state_after);
    done();
  });

});
