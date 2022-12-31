import styles from "./App.module.css";

import NewNote from "./components/NewNote";

const App = function () {
  return (
    <main className={styles["app"]}>
      <NewNote />
    </main>
  );
};

export default App;
