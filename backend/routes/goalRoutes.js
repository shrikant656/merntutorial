const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authMiddleware');
const { getGoals, setGoals, updateGoals, deleteGoals } =  require('../controllers/goalController.js');

// router.get('/', getGoals)
router.route('/').get(protectRoute, getGoals).post(protectRoute, setGoals);
// router.post('/', setGoals)

// router.put('/:id', updateGoals)
router.route('/:id').put(protectRoute, updateGoals).delete(protectRoute, deleteGoals);
// router.delete('/:id', deleteGoals)

module.exports = router;