import { useContext } from "react";
import { DATABASE_URL } from "../utils/config";
import useHttp from "../hooks/use-http";

import NoteContext from "../store/note-context";

import styles from "./NewNote.module.css";

import Section from "../layout/Section";
import NoteForm from "./NoteForm";

const NewNote = function (props) {
  const { addNote } = useContext(NoteContext);
  const { isLoading, error, sendRequest: sendNoteRequest } = useHttp();

  const createNote = (noteData) => {
    const generatedId = noteData.name;
    const createdNote = {
      id: generatedId,
      title: noteData.title,
      content: noteData.content,
    };
    addNote(createdNote);
  };

  const addFormHandler = (note) => {
    sendNoteRequest(
      {
        url: `${DATABASE_URL}notes.json`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: note.title, content: note.content },
      },
      createNote(note)
    );
  };

  return (
    <Section className={styles["form-section"]}>
      <NoteForm onAddNote={addFormHandler} />
    </Section>
  );
};

export default NewNote;
