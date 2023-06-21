// The code below are the dependencies 
const router = require('express').Router();
const saveData = require('../../../db/saveData');

// The line of code below is the GET Request 
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

//The line of code below is the POST Request
router.post('/notes', function (req, res) {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status().json(err));
});

//The line of code below is the DELETE Request
router.delete('/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ok: true}))
        .catch(err => res.status().json(err));
});

module.exports =  router;