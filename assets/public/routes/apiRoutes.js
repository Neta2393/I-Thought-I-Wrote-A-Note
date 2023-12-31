// Dependencies 
const router = require('express').Router();
const saveData = require('../routes/saveData');

// GET Request 
router.get('public\routes\htmlRoutes.js', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST Request
router.post('public\routes\htmlRoutes.js', function (req, res) {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// DELETE Request
router.delete('/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ok: true}))
        .catch(err => res.status(500).json(err));
});

module.exports =  router;