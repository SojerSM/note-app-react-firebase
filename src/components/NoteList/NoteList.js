import { useContext } from 'react';

import styles from './NoteList.module.css';

import NoteContext from '../../store/note-context';

import NoteItem from './NoteItem';

const NoteList = function (props) {
  const { notes } = useContext(NoteContext);

  return (
    <div className={styles['list']}>
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
