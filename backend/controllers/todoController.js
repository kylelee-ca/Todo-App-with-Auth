const asyncHandler = require('express-async-handler');


// @desc Get Todos
// route GET /api/goals
// acess Private
const getTodos =  asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Get Todos'});
});
// @desc Set Todos
// route POST /api/goals
// acess Private
const setTodo = asyncHandler( async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Text empty');
    }
    res.status(200).json({ message: 'Set Todos'});
    
});
// @desc Update Todos
// route PUT /api/goals/:id
// acess Private
const updateTodo = asyncHandler((req, res) => {
    res.status(200).json({ message: `Delete Todos ${req.params.id}`});
});
// @desc Delete Todos
// route DELETE /api/goals/:id
// acess Private
const deleteTodo = asyncHandler((req, res) => {
    res.status(200).json({ message: `Delete Todos ${req.params.id}`});
});


module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}; 