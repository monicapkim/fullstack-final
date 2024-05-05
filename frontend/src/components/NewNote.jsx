import React from "react";

function NewNote({ onAdd, onChange, newNote }) {
  return (
    <form onSubmit={onAdd}>
      <input
        name="title"
        placeholder="Title"
        onChange={onChange}
        value={newNote.title}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="3"
        onChange={onChange}
        value={newNote.content}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewNote;
