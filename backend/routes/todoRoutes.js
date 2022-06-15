const express = require('express');
const router = express.Router();
const { getTodos, setTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

// router.get('/', getTodos);
// router.post('/', setTodo);
// router.put('/:id', updateTodo);
// router.delete('/:id', deleteTodo);

router.route('/').get(getTodos).post(setTodo);
router.route('/:id').put(updateTodo).delete(deleteTodo);

module.exports = router;