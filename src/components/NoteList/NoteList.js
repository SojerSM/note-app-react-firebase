import { useContext } from 'react';

import styles from './NoteList.module.css';

import NoteContext from '../../store/note-context';

import NoteItem from './NoteItem';

const NoteList = function (props) {
  const { notes } = useContext(NoteContext);

  return (
    <div className={styles['list']}>
      {notes.length > 0 ? (
        notes.map((note) => {
          return (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
            />
          );
        })
      ) : (
        <p className={styles['alt-message']}>No items found.</p>
      )}
    </div>
  );
};

export default NoteList;
