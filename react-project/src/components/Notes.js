import Note from "./Note";

function Notes({ notes, onDelete, setModalShow, setNoteTitle, setNoteValue }) {

     return (
          <div className="  flex-wrap d-flex">
               {notes.map((note) => (
                    <Note
                         key={note.id}
                         note={note}
                         onDelete={onDelete}
                         setModalShow={setModalShow}
                         setNoteTitle={setNoteTitle}
                         setNoteValue={setNoteValue}
                    />
               ))}
          </div>
     );
}

export default Notes;
