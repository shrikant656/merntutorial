const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc   Get Goal
// @route  GET /api/goals
// access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
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
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal);
})

// @desc   Update Goal
// @route  PUT /api/goals/:id
// access  Private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }
    //check user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    //make sure loggedin user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedGoal);
})

// @desc   Delete Goal
// @route  DELETE /api/goals/:id
// access  Private
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }
    // const user = await User.findById(req.user.id)

    //check user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    //make sure loggedin user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }
    // await goal.remove();
    // res.status(200).json({id: req.params.id})
    const deleteGoal = await Goal.deleteOne({ _id: req.params.id })
    res.status(200).json(deleteGoal);
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}