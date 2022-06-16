const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel');

// @desc Get Todos
// route GET /api/goals
// acess Private
const getTodos =  asyncHandler( async (req, res) => {
    const todos = await Todo.find();

    res.status(200).json(todos);
});
// @desc Set Todos
// route POST /api/goals
// acess Private
const setTodo = asyncHandler( async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Text empty');
    }
    const todo = await Todo.create({
        text: req.body.text,

    })
    res.status(200).json(todo);
    
});
// @desc Update Todos
// route PUT /api/goals/:id
// acess Private
const updateTodo = asyncHandler( async (req, res) => {

    const todo = await Todo.findById(req.params.id);
    if(!todo) {
        res.status(400)
        throw new Error('Todo not found');
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedTodo);
});
// @desc Delete Todos
// route DELETE /api/goals/:id
// acess Private
const deleteTodo = asyncHandler( async (req, res) => { 

    const todo = await Todo.findById(req.params.id);
    if(!todo) {
        res.status(400)
        throw new Error('Todo not found');
    }
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTodo);
});


module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}; 