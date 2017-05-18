import deepFreeze from 'deep-freeze';
import app from 'reducers/app';

describe('app reducer', function() {

  it('should return all child reducers', function(done) {
    const defaultState = app(undefined, {});
    defaultState.hasOwnProperty('vehicles').should.equal(true);
    done();
  });

});
