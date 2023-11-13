const mongoose = require('mongoose')

const schema = mongoose.Schema

const taskSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
},{ timestamps: true }
)

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;