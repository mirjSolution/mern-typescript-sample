import React from 'react';
import Note from './components/Note';
import { Note as NoteModel } from './models/note';

function App() {
  const [notes, setNotes] = React.useState<NoteModel[]>([]);

  React.useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch('/api/notes', {
          method: 'GET',
        });

        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <Note note={note} key={note._id} />
      ))}
    </div>
  );
}

export default App;
