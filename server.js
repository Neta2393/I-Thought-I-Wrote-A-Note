// Dependencies 

const express = require('express');

// Direct server to use routes
const apiRoutes = require('./public/routes/apiRoutes');
const htmlRoutes = require('./public/routes/htmlRoutes');

// The line of code below is to create server
const app = express();

// The line of code below is the set PORT
const PORT = process.env.PORT || 5500;

// Middleware to complete request - response cycle
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('routes'));
app.use('public\routes\apiRoutes.js', apiRoutes);
app.use('public\routes\htmlRoutes.js', htmlRoutes);

//App Listener
app.listen(PORT, () => {
    console.log(`Hello and welcome to my note taker app on port ${5500}!`);
});