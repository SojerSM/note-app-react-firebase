import { useContext } from "react";
import { DATABASE_URL, ENDPOINT_NOTES } from "../utils/config";
import useHttp from "../hooks/use-http";

import NoteContext from "../store/note-context";

import styles from "./NewNote.module.css";

import Section from "../layout/Section";
import NoteForm from "./NoteForm";

const NewNote = function (props) {
  const { addNote } = useContext(NoteContext);
  const { isLoading, error, sendRequest: sendNoteRequest } = useHttp();

  const createNote = (note, noteData) => {
    const generatedId = noteData.name;
    const createdNote = {
      id: generatedId,
      title: note.title,
      content: note.content,
    };
    addNote(createdNote);
  };

  const addFormHandler = (note) => {
    sendNoteRequest(
      {
        url: `${DATABASE_URL}${ENDPOINT_NOTES}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: note.title, content: note.content },
      },
      createNote.bind(null, note)
    );
  };

  return (
    <Section className={styles["form-section"]}>
      <NoteForm
        onAddNote={addFormHandler}
        isLoading={isLoading}
        httpError={error}
      />
    </Section>
  );
};

export default NewNote;
