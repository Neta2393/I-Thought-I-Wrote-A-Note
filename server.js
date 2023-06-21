// Dependencies 

const express = require('express');

// Direct server to use routes
const apiRoutes = require('./public/routes/apiRoutes.js');
const htmlRoutes = require('./public/routes/htmlRoutes.js');

// The line of code below is to create server
const app = express();

// The line of code below is the set PORT
const PORT = process.env.PORT || 5500;

// Middleware to complete request - response cycle
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/html', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`Hello and welcome to my note taker app on port ${5500}!`);
});