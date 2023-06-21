const fs = require("fs");
const path = require("path");

function newNote(body, notesArray) {
  const note = body;

  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, 'public\notes.html'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}


module.exports = {newNote};