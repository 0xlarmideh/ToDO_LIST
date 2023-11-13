const Task = require("../models/task");

const getAllTasks = (req, res) => {
  Task.find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send({ message: "Error occurred while fetching tasks", error });
    });
};

const taskDetails = (req, res) => {
  Task.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send({
        message: "Error occurred while fetching task details",
        error,
      });
    });
};

const createTask = (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then((result) => {
      res.send({
        success: true,
        message: "Task created successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.send({ message: "Error occurred while creating task", error });
    });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
    .then((result) => {
      res.send({
        success: true,
        message: "Task deleted successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.send({ message: "Error occurred while deleting task", error });
    });
};

const updateTask = async (req, res) => {
  // const id = req.params.id
  await Task.findByIdAndUpdate({ _id: req.task._id }, req.body)
    .then((result) => {
      res.send({
        success: true,
        message: "Task updated successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.send({ message: "Error occurred while updating task", error });
    });
};

module.exports = {
  taskDetails,
  getAllTasks,
  createTask,
  deleteTask,
  updateTask}
