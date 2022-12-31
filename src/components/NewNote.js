import { useRef } from "react";

import styles from "./NewNote.module.css";

import Section from "../layout/Section";
import Button from "../layout/Button";

const NewNote = function (props) {
  const titleRef = useRef();
  const contentRef = useRef();

  const addNoteHandler = (event) => {
    event.preventDefault();

    const note = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    console.log("Title: ", note.title);
    console.log("Content: ", note.content);

    titleRef.current.value = "";
    contentRef.current.value = "";
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
      </form>
    </Section>
  );
};

export default NewNote;
