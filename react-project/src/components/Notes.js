import Note from "./Note";

function Notes({ notes, onDelete }) {
     return (
          <div className="  flex-wrap d-flex">
               {notes.map((note) => (
                    <Note key={note.id} note={note} onDelete={onDelete} />
               ))}
          </div>
     );
}

export default Notes;
