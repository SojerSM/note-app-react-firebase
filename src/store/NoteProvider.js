import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';

import { API_URL } from '../utils/config';

import NoteContext from './note-context';

const NoteProvider = function (props) {
  const [notes, setNotes] = useState([]);
  const { sendRequest: fetchNotes } = useHttp();

  useEffect(() => {
    const transformNotes = (notesObj) => {
      const loadedNotes = [];

      for (const noteKey in notesObj) {
        loadedNotes.push({
          id: noteKey,
          title: notesObj[noteKey].title,
          content: notesObj[noteKey].content,
        });
      }
      setNotes(loadedNotes);
    };

    fetchNotes({ url: `${API_URL}notes.json` }, transformNotes);
  }, [fetchNotes]);

  const addNote = (note) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: note.id,
        title: note.title,
        content: note.content,
      },
    ]);
  };

  const removeNote = (id) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  };

  const noteContext = {
    notes,
    addNote,
    removeNote,
  };

  console.log(notes);

  return (
    <NoteContext.Provider value={noteContext}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
