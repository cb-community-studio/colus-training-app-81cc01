const { Courses } = require('./courses.class');
const createModel = require('../../models/courses.model');
const hooks = require('./courses.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/courses', new Courses(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('courses');

  service.hooks(hooks);
};