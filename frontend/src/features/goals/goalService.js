import axios from 'axios';

const API_URL = '/api/goals/';

// Create new goal for user
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config);

    return response.data;
}

// Get all goals for user
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config);

    return response.data;
}

// Delete goals for user
const deleteGoals = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(`${API_URL}/${goalId}`, config);

    return response.data;
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoals
}

export default goalService;