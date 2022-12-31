import { useContext } from "react";

import NoteContext from "../store/note-context";

import styles from "./NewNote.module.css";

import Section from "../layout/Section";
import NoteForm from "./NoteForm";

const NewNote = function (props) {
  const { addNote } = useContext(NoteContext);

  const addFormHandler = (note) => {
    addNote(note);
  };

  return (
    <Section className={styles["form-section"]}>
      <NoteForm onAddNote={addFormHandler} />
    </Section>
  );
};

export default NewNote;
