import React from "react";

const NoteContext = React.createContext({
  notes: [],
  addNote: (note) => {},
});

export default NoteContext;
