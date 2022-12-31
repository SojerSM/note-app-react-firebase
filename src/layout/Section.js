import styles from "./Section.module.css";

const Section = function (props) {
  const classes = `${styles["section"]} ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default Section;
