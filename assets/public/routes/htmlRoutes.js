// Dependencies 
const router = require('express').Router();
const path =  require('path');

// GET routes for possible query parameters - intended for HTML page
router.get('public\routes\htmlRoutes.js', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public\notes.html'));
});

router.get('public\routes\htmlRoutes.js', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});
router.get('public\routes\htmlRoutes.js', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

module.exports = router;