const asyncHandler = require('express-async-handler');

// @desc   Get Goal
// @route  GET /api/goals
// access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Goal'});
})

// @desc   Set Goal
// @route  POST /api/goals
// access  Private
const setGoals = asyncHandler(async (req, res) => {
    const { text } = req.body;
    if (!text) {
        res.status(400);
        throw new Error('Please add text field')
    }
    res.status(200).json({message: text});
})

// @desc   Update Goal
// @route  PUT /api/goals/:id
// access  Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`});
})

// @desc   Delete Goal
// @route  DELETE /api/goals/:id
// access  Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`});
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}