import styles from "./App.module.css";

import NewNote from "./components/NewNote";

import NoteProvider from "./store/NoteProvider";

const App = function () {
  return (
    <NoteProvider>
      <main className={styles["app"]}>
        <NewNote />
      </main>
    </NoteProvider>
  );
};

export default App;
