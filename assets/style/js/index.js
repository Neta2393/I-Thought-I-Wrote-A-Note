const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRoutes = require('');
const htmlRoutes = require('public\routes\htmlRoutes.js');


const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
