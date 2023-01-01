import styles from "./App.module.css";

import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList/NoteList";

import NoteProvider from "./store/NoteProvider";

const App = function () {
  return (
    <NoteProvider>
      <main className={styles["app"]}>
        <NewNote />
        <NoteList />
      </main>
    </NoteProvider>
  );
};

export default App;
