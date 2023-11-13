const express = require('express');

const router = express.Router();
const taskController = require('../controller/taskController')

router.get('/', taskController.getTasks);

router.get('/:id', taskController.taskDetails)

router.post('/create', taskController.createTask)

router.delete('/:id', taskController.deleteTask)
router.patch("/update", taskController.updateTask);

module.exports = router;