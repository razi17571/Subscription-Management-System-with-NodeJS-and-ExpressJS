// routes/subscriptionPlans.js
const express = require('express');
const router = express.Router();
const SubscriptionPlan = require('../models/SubscriptionPlan');

// Create a new subscription plan
router.post('/', async (req, res) => {
  try {
    const plan = new SubscriptionPlan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create subscription plan' });
  }
});

// Get all subscription plans
router.get('/', async (req, res) => {
  try {
    const plans = await SubscriptionPlan.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subscription plans' });
  }
});

// Update a subscription plan
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlan = await SubscriptionPlan.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update subscription plan' });
  }
});

// Delete a subscription plan
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await SubscriptionPlan.findByIdAndDelete(id);
    res.json({ message: 'Subscription plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete subscription plan' });
  }
});

module.exports = router;
