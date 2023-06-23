// Dependencies 
const express = require('express');
const path = require('path');
const api = require('./assets/style/js/index.js');

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//App Listener
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));

