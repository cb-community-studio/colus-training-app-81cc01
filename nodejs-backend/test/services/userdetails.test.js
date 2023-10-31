const assert = require('assert');
const app = require('../../src/app');

describe('\'userdetails\' service', () => {
  it('registered the service', () => {
    const service = app.service('userdetails');

    assert.ok(service, 'Registered the service (userdetails)');
  });
});
