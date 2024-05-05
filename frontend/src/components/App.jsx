import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NewNote from "./NewNote";
import { auth, googleProvider } from "../services/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetching notes from the backend...");
    axios
      .get("http://localhost:5002/notes")
      .then((response) => {
        console.log("Notes fetched:", response.data);
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User is signed in:", currentUser);
        setUser(currentUser);
      } else {
        console.log("No user is signed in.");
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function addNote(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5002/notes", newNote)
      .then((response) => {
        setNotes((prevNotes) => [...prevNotes, response.data]);
        setNewNote({ title: "", content: "" });
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });
  }

  function deleteNote(noteId) {
    axios
      .delete(`http://localhost:5002/notes/${noteId}`)
      .then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  }

  function createNotes(note) {
    return (
      <Note
        key={note._id}
        id={note._id}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      {user ? (
        <>
          <Header />
          <button className="auth-button" onClick={logOut}>Sign Out</button>
          <NewNote onAdd={addNote} onChange={handleChange} newNote={newNote} />
          {notes.map(createNotes)}
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <button className="auth-button" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
      )}
    </div>
  );
}

export default App;
