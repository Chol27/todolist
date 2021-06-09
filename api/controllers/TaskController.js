'use strict';

const Task = require('../models/Task');
const jwt = require('jsonwebtoken');
  
const ctrl = {
  
  getTask: (req, res) => {
    Task.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((e) => res.error(e));
  },

  // getTaskByTime: (req, res) => {
  //   //some query
  //   Task
  //   .then((result) => res.send(result))
  //   .catch((e) => res.error(e));
  // },

  getAllTask: (req, res) => {
    Task.find()
      .then((result) => res.send(result))
      .catch((e) => res.error(e));
  },

  createTask: (req, res) => {
    const body = req.body;
    Task.create(body)
      .then((result) => res.send(result))
      .catch((e) => res.error(e));
  },

  updateTask: (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    Task.findByIdAndUpdate(id, {
      $set: payload
    })
    .then((result) => res.send(result))
    .catch((e) => res.error(e));
  },


  deleteTask: (req, res, next) => {
    Task.findByIdAndRemove(req.params.id)
    .then((result) => res.send(result))
    .catch((e) => res.error(e));
  },

};

module.exports = {
  ctrl,
};
