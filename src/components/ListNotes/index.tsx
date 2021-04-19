import { useState, useEffect } from 'react';
import SoftKeys from '../SoftKeys';
import styles from './styles.module.css';

const ListNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const allNotesStr = localStorage.getItem('notes');
    if (!allNotesStr) {
      return;
    }
    setNotes(JSON.parse(allNotesStr));
  }, []);

  return (
    <>
      <section className={styles.notes}>
        {notes.map(({ title, desc }) => (
          <span nav-selectable>{title || desc}</span>
        ))}
        {!notes.length && <span>Create a note to get started!</span>}
      </section>
      <SoftKeys
        left={notes.length ? 'Edit' : undefined}
        center="New"
        right={notes.length ? 'Delete' : undefined}
      />
    </>
  );
};

export default ListNotes;