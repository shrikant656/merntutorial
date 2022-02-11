const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } =  require('../controllers/goalController.js');

// router.get('/', getGoals)
router.route('/').get(getGoals).post(setGoals);
// router.post('/', setGoals)

// router.put('/:id', updateGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals);
// router.delete('/:id', deleteGoals)

module.exports = router;