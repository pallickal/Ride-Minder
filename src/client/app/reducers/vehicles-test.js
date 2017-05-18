import deepFreeze from 'deep-freeze';
import vehicles from 'reducers/vehicles';

describe('vehicles reducer', function() {
  it('should return default state', function(done) {
    vehicles(undefined, {}).should.deep.equal([]);
    done();
  });

  it('should add a vehicle', (done) => {
    const state_before = [];
    const expected_state_after = [
      {
        id: 1,
        vin: '1JZ2093KS20320931',
        make: 'Acura',
        model: 'Integra',
        trim: 'LS',
        year: 1997,
        miles: 57383
      }
    ];

    deepFreeze(state_before);

    const state_after = vehicles(state_before,
      {
        type: 'ADD_VEHICLE',
        vin: '1JZ2093KS20320931',
        make: 'Acura',
        model: 'Integra',
        trim: 'LS',
        year: 1997,
        miles: 57383
      }
    );

    state_after.should.deep.equal(expected_state_after);
    done();
  });

});
