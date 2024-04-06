const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  features: { type: [String], required: true },
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);
