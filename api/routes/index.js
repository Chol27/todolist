'use strict';

const express = require('express');

const routes = express.Router();
const { ctrl } = require('../controllers/TaskController');

routes.route('/').get(ctrl.getAllTask)

routes.route('/post').post(ctrl.createTask)

routes.route('/get').get(ctrl.getAllTask)

routes.route('/edit/:id').get(ctrl.getTask)

routes.route('/put/:id').put(ctrl.updateTask)

routes.route('/delete/:id').delete(ctrl.deleteTask)


// routes.route('/:id')
//   .get(ctrl.getAnonymousUser)
//   .put(ctrl.updateAnonymousUser)

module.exports = routes;
