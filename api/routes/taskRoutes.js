'use strict';
module.exports = function(app) {
  var tasklList = require('../controllers/taskController');

  // todoList Routes
  app.route('/tasks')
    .get(tasklList.list_all_tasks)
    .post(tasklList.create_a_task);


  app.route('/tasks/:taskId')
    .get(tasklList.read_a_task)
    .put(tasklList.update_a_task)
    .delete(tasklList.delete_a_task);
};
