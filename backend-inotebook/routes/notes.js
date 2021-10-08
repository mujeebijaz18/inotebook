const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');


router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
})


router.post('/addnewnote', fetchuser, [
    body('title', 'Title should not be less than 3 characters').isLength({ min: 3 }),
    body('description', 'Description must be atleast 6 characters long').isLength({ min: 6 })
], async (req, res) => {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNotes = await note.save();
        res.json(savedNotes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured.");
    }
})


router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    let note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(401).send("Not allowed");
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note });
})

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(401).send("Not allowed");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "sucess": "Note has been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured.");
    }
})



module.exports = router;