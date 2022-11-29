import Note from "./Note";

function Notes({ notes, onDelete, setModalShow }) {
     return (
          <div className="  flex-wrap d-flex">
               {notes.map((note) => (
                    <Note
                         key={note.id}
                         note={note}
                         onDelete={onDelete}
                         setModalShow={setModalShow}
                    />
               ))}
          </div>
     );
}

export default Notes;
