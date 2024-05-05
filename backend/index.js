const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const DB_URL = "mongodb+srv://mpk2145:ovlt01lQqV9k0HTP@cluster0.qx3l9rh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    seedInitialNotes();
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);

const initialNotes = [
  { title: "Delegation", content: "Delegation makes things easier." },
  { title: "Loops", content: "Loops can help with repetitive tasks." },
  { title: "Arrays", content: "Arrays store multiple items together." },
];

async function seedInitialNotes() {
  try {
    const existingNotes = await Note.find();
    if (existingNotes.length === 0) {
      await Note.insertMany(initialNotes);
      console.log("Seeded initial notes into the database.");
    }
  } catch (error) {
    console.error("Error seeding initial notes:", error);
  }
}

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/notes", async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});