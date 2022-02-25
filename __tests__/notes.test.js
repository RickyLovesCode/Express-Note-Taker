const fs = require("fs");
const { } = require("module");
const { execPath } = require("process");
const {
    createNewNote,
    validateNote,
    deleteNote,
} = require("../lib/notes");

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

test("validate notes", () => {
    const note = [{ name: "test", Text: "Testing...", id: "rickytest123" }];
}) 