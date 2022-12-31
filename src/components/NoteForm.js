import { useRef, useState } from "react";

import styles from "./NoteForm.module.css";

import Button from "../layout/Button";

const NoteForm = function (props) {
  const [error, setError] = useState();
  const titleRef = useRef();
  const contentRef = useRef();

  const clearInputs = () => {
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  const formSubmitHandler = (event) => {
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

    props.onAddNote(note);
    clearInputs();
  };

  return (
    <form className={styles["form"]}>
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
      <Button className={styles["submit"]} onClick={formSubmitHandler}>
        Submit
      </Button>
      {error && <p>Make sure you fill both fields with content.</p>}
    </form>
  );
};

export default NoteForm;
