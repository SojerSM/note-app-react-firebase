import { useRef, useState, useContext } from "react";

import styles from "./NewNote.module.css";

import NoteContext from "../store/note-context";

import Section from "../layout/Section";
import Button from "../layout/Button";

const NewNote = function (props) {
  const { addNote } = useContext(NoteContext);
  const [error, setError] = useState();
  const titleRef = useRef();
  const contentRef = useRef();

  const clearInputs = () => {
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  const addNoteHandler = (event) => {
    event.preventDefault();
    setError(false);

    if (titleRef.current.value === "" || contentRef.current.value === "") {
      setError(true);
      clearInputs();
      return;
    }

    const note = {
      key: Math.random().toString(),
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    addNote(note);
    clearInputs();
  };

  return (
    <Section className={styles["form-section"]}>
      <form>
        <div>
          <label htmlFor={"title"}>Title</label>
          <input
            ref={titleRef}
            type={"text"}
            id={"title"}
            maxLength={30}
            className={styles["input"]}
          ></input>
        </div>
        <div>
          <label htmlFor={"content"}>Content</label>
          <textarea
            ref={contentRef}
            id={"content"}
            className={styles["input"]}
            maxLength={250}
          ></textarea>
        </div>
        <Button className={styles["submit"]} onClick={addNoteHandler}>
          Submit
        </Button>
        {error && <p>Make sure you fill both fields with content.</p>}
      </form>
    </Section>
  );
};

export default NewNote;
