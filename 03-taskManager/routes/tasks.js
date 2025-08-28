const express = require('express')
const router = express.Router();
const {getAllTasks, createTask, editTask, getTask, deleteTask} = require('../controller/tasks')

router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTask)
router.route('/:id').patch(editTask)
router.route('/:id').delete(deleteTask)




module.exports = router