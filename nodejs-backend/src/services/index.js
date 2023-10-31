const users = require("./users/users.service.js");
const userdetails = require("./userdetails/userdetails.service.js");
const courses = require("./courses/courses.service.js");
const topics = require("./topics/topics.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(userdetails);
  app.configure(courses);
  app.configure(topics);
    // ~cb-add-configure-service-name~
};
