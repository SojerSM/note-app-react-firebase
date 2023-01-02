import { useContext } from 'react';
import { API_URL } from '../../utils/config';
import useHttp from '../../hooks/use-http';

import styles from './NoteItem.module.css';
import { removeIcon } from '../../assets/icons';

import NoteContext from '../../store/note-context';

import Section from '../../layout/Section';

const NoteItem = function (props) {
  const { removeNote } = useContext(NoteContext);
  const { sendRequest: sendRemoveRequest } = useHttp();

  const removeNoteHandler = (event) => {
    event.preventDefault();

    sendRemoveRequest(
      {
        url: `${API_URL}/notes/${props.id}.json`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: props.id,
      },
      removeNote(props.id)
    );
  };

  return (
    <Section className={styles['note']}>
      <div>
        <h2>{props.title}</h2>
        <button className={styles['remove-btn']} onClick={removeNoteHandler}>
          <svg className={styles['svg-icon']} viewBox="0 0 20 20">
            {removeIcon}
          </svg>
        </button>
      </div>
      <div>
        <p className={styles['content']}>{props.content}</p>
      </div>
    </Section>
  );
};

export default NoteItem;
