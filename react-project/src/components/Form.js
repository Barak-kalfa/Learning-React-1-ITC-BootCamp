import { useState } from "react";
import Notes from "./Notes";
import Moment from "moment";

function NotesForm() {
     const [notes, setNotes] = useState([]);
     const [noteTitle, setNoteTitle] = useState("");
     const [noteText, setNoteText] = useState("");
     const [date, setDate] = useState(Moment().format("MMM Do YY"));
     const [id, setId] = useState(0);

     const deleteNotes = (id) => {
          setNotes(notes.filter((notes) => notes.id !== id));
     };
     function addNote(e) {
          setId(Math.random());
          e.preventDefault();
          setDate(Moment().format("MMM Do YY"));
          const note = { noteTitle, noteText, date, id };
          setNotes(notes.concat(note));
     }
     return (
          <div className="p-4 d-flex justify-content-center flex-column align-items-center">
               <div>
                    <form
                         onSubmit={addNote}
                         className="align-items-center  p-3  d-flex justify-content-center flex-column "
                    >
                         <h1 className="display-3 fw-bold">Add Note</h1>
                         <label className="h4">
                              Note Title: <br></br>
                              <input
                                   type="text"
                                   id="noteTitle"
                                   value={noteTitle}
                                   onChange={(e) =>
                                        setNoteTitle(e.target.value)
                                   }
                              />
                         </label>
                         <br></br>
                         <label className="h4">
                              Note: <br></br>
                              <textarea
                                   type="textarea"
                                   value={noteText}
                                   id="noteText"
                                   onChange={(e) => setNoteText(e.target.value)}
                                   required
                              />
                         </label>
                         <br></br>
                         <input
                              className="rounded-pill p-2 ps-5 pe-5 mt-3"
                              style={{ backgroundColor: "rgb(173, 231, 146)" }}
                              type="submit"
                              value="Add Note To Notes List"
                         />
                    </form>
               </div>
               <br></br>
               {notes.length > 0 ? (
                    <div className="m-5">
                         <Notes notes={notes} onDelete={deleteNotes} />
                    </div>
               ) : (
                    `You Currently  Have No Notes`
               )}
          </div>
     );
}

export default NotesForm;
