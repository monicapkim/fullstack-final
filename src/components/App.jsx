import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NewNote from "./NewNote";
import initialNotes from "../notes";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function addNote(event) {
    event.preventDefault();
    setNotes((prevNotes) => {
      const newNoteWithKey = { ...newNote, key: Date.now() };
      return [...prevNotes, newNoteWithKey];
    });
    setNewNote({ title: "", content: "" });
  }

  function deleteNote(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.key !== noteId;
      });
    });
  }

  function createNotes(note) {
    return (
      <Note
        key={note.key}
        id={note.key}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <NewNote onAdd={addNote} onChange={handleChange} newNote={newNote} />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
