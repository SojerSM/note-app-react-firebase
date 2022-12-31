import React, { useState, useEffect } from "react";

import NoteContext from "./note-context";

const NoteProvider = function (props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const addNote = (note) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        key: note.key,
        title: note.title,
        content: note.content,
      },
    ]);
  };

  const noteContext = {
    notes,
    addNote,
  };

  return (
    <NoteContext.Provider value={noteContext}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
