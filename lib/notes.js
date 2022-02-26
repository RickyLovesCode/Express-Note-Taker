const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(body);
    fs.writeFileSync(
        path.join(__dirname, "../develop/db/db.json"),
        JSON.stringify(notesArr, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.name || typeof note.name !== "string" || note.name === "") {
        return false;
    }
    if (!note.name || typeof note.name !== "string" || note.name === "") {
        return false;
    }
    return true;
}

function deleteNote(noteID, notesArr) {
    const id = noteID;
    let noteIndex;
    notesArr.filter((note, index) => {
        if (note.id == id) {
            noteIndex = index;
        }
    });

    notesArr.splice(noteIndex, 1);

    fs.writeFileSync(
        path.join(__dirname, "../develop/db/db.json"),
        JSON.stringify(notesArr, null, 2)
    );
    return notesArr;
}

module.exports = { createNewNote, validateNote, deleteNote };