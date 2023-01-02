import { useContext, useState } from 'react';
import { API_URL } from '../../utils/config';
import { capitalizeFirstLetter } from '../../utils/helpers';
import useHttp from '../../hooks/use-http';

import styles from './NoteItem.module.css';
import * as icons from '../../assets/icons';

import NoteContext from '../../store/note-context';

import Section from '../../layout/Section';

const NoteItem = function (props) {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const toggleNoteExpandHandler = (event) => {
    event.preventDefault();
    setIsExpanded((prevState) => !prevState);
  };

  const contentHeight = isExpanded && '10rem';

  return (
    <Section className={styles['note']}>
      <div>
        <h2>{capitalizeFirstLetter(props.title)}</h2>
        <div>
          <button
            className={styles['spread-btn']}
            onClick={toggleNoteExpandHandler}
          >
            <svg className={styles['svg-icon']} viewBox="0 0 20 20">
              {isExpanded ? icons.spreadIconExpanded : icons.spreadIconHidden}
            </svg>
          </button>
          <button className={styles['remove-btn']} onClick={removeNoteHandler}>
            <svg className={styles['svg-icon']} viewBox="0 0 20 20">
              {icons.removeIcon}
            </svg>
          </button>
        </div>
      </div>
      <div>
        <p className={styles['content']} style={{ maxHeight: contentHeight }}>
          {capitalizeFirstLetter(props.content)}
        </p>
      </div>
    </Section>
  );
};

export default NoteItem;
