import styles from './styles.module.css';

const CreateNote = () => {
  return (
    <>
      <section className={styles.newNote}>
        <input type="text" id='note-title' nav-selectable autoFocus name="title" placeholder="Title" />
        <textarea id='note-desc' nav-selectable name="description" placeholder="Description"></textarea>
        <p>
          <span>Location:&nbsp;</span>
          <span id="note-location-label">Updating...</span>
        </p>
      </section>
    </>
  );
};

export default CreateNote;