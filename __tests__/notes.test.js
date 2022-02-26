const fs = require("fs");
const {
    createNewNote,
    validateNote,
    deleteNote,
} = require("../lib/notes");

jest.mock("fs");

test("create note OBJ", () => {
    const note = {
        name: "test",
        Text: "Testing...",
        id: "rickytest123"
    };

    expect(note.name).toBe("test");
    expect(note.Text).toBe("Testing...");
    expect(note.id).toBe("rickytest123");

});

test("validate note", () => {
    const note = [
        { name: "test", Text: "Testing...", id: "rickytest123" },
        { name: "test two", Text: "Testing..., two", id: "rickytest123" },
    ];

    const result = validateNote(note[0]);
    expect(result).toBe(true);
});

test("delete note", () => {
    const note = [
        { name: "test", Text: "Testing...", id: "rickytest123" },
        { name: "test two", Text: "Testing..., two", id: "rickytest123" },
    ];

    const newNote = deleteNote("rickytest123", note);
    expect(newNote.length).toBe(1);
});