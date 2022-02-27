const fs = require("fs");
const {
    createNewNote,
    validateNote,
    deleteNote,
} = require("../lib/notes");

jest.mock("fs");

test("create note OBJ", () => {
    const note = {
        title: "test",
        text: "Testing...",
        id: "rickytest123"
    };

    expect(note.title).toBe("test");
    expect(note.text).toBe("Testing...");
    expect(note.id).toBe("rickytest123");

});

test("validate note", () => {
    const note = [
        { title: "test", text: "Testing...", id: "rickytest123" },
        { title: "test two", text: "Testing..., two", id: "rickytest123" },
    ];

    const result = validateNote(note[0]);
    expect(result).toBe(true);
});

test("delete note", () => {
    const note = [
        { title: "test", text: "Testing...", id: "rickytest123" },
        { title: "test two", text: "Testing..., two", id: "rickytest123" },
    ];

    const newNote = deleteNote("rickytest123", note);
    expect(newNote.length).toBe(1);
});