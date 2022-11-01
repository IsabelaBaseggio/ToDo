const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.get("/getById/:id", TaskController.getById);

routes.post("/create", TaskController.createTask);
routes.post('/updateOne/:id', TaskController.updateOneTask)

module.exports = routes;
