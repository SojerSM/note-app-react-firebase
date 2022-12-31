import styles from "./NewNote.module.css";

import Section from "../layout/Section";

const NewNote = function (props) {
  return (
    <Section className={styles["form-section"]}>
      <form>
        <div>
          <label htmlFor={"title"}>Title</label>
          <input type={"text"} id={"title"} className={styles["input"]}></input>
        </div>
        <div>
          <label htmlFor={"content"}>Content</label>
          <textarea
            id={"content"}
            className={styles["input"]}
            maxLength={250}
          ></textarea>
        </div>
      </form>
    </Section>
  );
};

export default NewNote;
