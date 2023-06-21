// Dependencies 
const express = require('express');

// Direct server to use routes
const apiRoutes = require('./assets/js/routes/apiRoutes.js');
const htmlRoutes = require('./assets/js/routes/htmlroutes.js');

// Create server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3180;

// Middleware to complete request - response cycle
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${3180}!`);
});