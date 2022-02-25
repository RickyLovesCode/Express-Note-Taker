const express = require("express");
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

const {
    createNewNote,
    validateNote,
    deleteNote,
} = require("../../lib/notes");

const notes = require("../../Develop/db/db.json");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();

    if (!validateNote(req.body)) {
        res.status(400).send("note is formatted!");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete("/notes/:id", (req, res) => {
    const noteID = req.params.id;
    const note = deleteNote(noteID, notes);

    res.send(note);
});




module.exports = router;