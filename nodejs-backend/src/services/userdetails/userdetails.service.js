const { Userdetails } = require('./userdetails.class');
const createModel = require('../../models/userdetails.model');
const hooks = require('./userdetails.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/userdetails', new Userdetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('userdetails');

  service.hooks(hooks);
};