import styles from "./NoteItem.module.css";

import Section from "../../layout/Section";

const NoteItem = function (props) {
  return (
    <Section className={styles["note"]}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </Section>
  );
};

export default NoteItem;
