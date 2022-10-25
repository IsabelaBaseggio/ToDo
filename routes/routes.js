const routes = require('express').Router();
const TaskCpntroller = require('../controller/TaskController')

routes.get('/', TaskCpntroller.getAll)





module.exports = routes