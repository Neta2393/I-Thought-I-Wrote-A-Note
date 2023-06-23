const express = require('express');


const apiRoutes = require('./api');
const htmlRoutes = require('./html');


const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
