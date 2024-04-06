const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const authRoutes = require('./routes/auth');
const subscriptionPlanRoutes = require('./routes/subscriptionPlans');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/subscription-plans', subscriptionPlanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
