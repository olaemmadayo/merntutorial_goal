const asyncHandler = require('express-async-handler');
//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoals = async(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
})

// @desc Create goal
// @route POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  if(!req.body){
    res.status(400)
    throw new Error('Please add a text field');
  };
  res.status(201).json({ message: 'Create goal' });
} )

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal with id ${req.params.id}` });
} );

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal with id ${req.params.id}` });
})



module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal
}