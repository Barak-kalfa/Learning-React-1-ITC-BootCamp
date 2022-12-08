import { useState } from "react";
import Notes from "./Notes";
import Moment from "moment";
import Card from "react-bootstrap/Card";

function NotesForm(props) {
     const [notes, setNotes] = useState([]);
     const [noteTitle, setNoteTitle] = useState(props.noteCardTitle);
     const [noteText, setNoteText] = useState(props.noteCardText);
     const [createdDate, setDate] = useState();
     const [updatedDate, setUpdatedDate] = useState(props.updatedDate);
     const [id, setId] = useState(0);

     
     function addNote(e) {
          setId(Math.random());
          e.preventDefault();
          const note = { noteTitle, noteText, createdDate, id, updatedDate };
          setNotes([...notes, note]);
     }

     const updateNote = (e) => {
          e.preventDefault();
          props.note.noteTitle = noteTitle;
          props.note.noteText = noteText;
          props.note.updatedDate = updatedDate;
          props.onHide(false);
     };

     const deleteNote = (id) => {
          setNotes(notes.filter((notes) => notes.id !== id));
     };


     if (!props.modalShow) {
          return (
               <div className="p-4 d-flex flex-column align-items-center ">
                    <div>
                         <form
                              onSubmit={addNote}
                              className="align-items-center p-3 d-flex flex-column "
                         >
                              <h1 className="display-3 fw-bold">Add Note</h1>
                              <label className="h4">
                                   Note Title: <br></br>
                                   <input
                                        className="rounded"
                                        type="text"
                                        id="noteTitle"
                                        defaultValue={noteTitle}
                                        onChange={(e) =>
                                             setNoteTitle(e.target.value)}
                                   />
                              </label>
                              <br></br>
                              <label className="h4">
                                   Note: <br></br>
                                   <textarea
                                        className="rounded "
                                        type="textarea"
                                        value={noteText}
                                        id="noteText"
                                        onChange={(e) => {
                                             setNoteText(e.target.value);
                                             setDate(
                                                  Moment().format("MMM Do YY")
                                             );
                                             setUpdatedDate("");
                                        }}
                                        required
                                   />
                              </label>
                              <br></br>
                              <input
                                   className="rounded-pill p-2 ps-5 pe-5 mt-3"
                                   style={{
                                        backgroundColor: "rgb(173, 231, 146)",
                                   }}
                                   type="submit"
                                   value="Add Note To Notes List"
                              />
                         </form>
                    </div>
                    <br></br>
                    {notes.length > 0 ? (
                         <div className="m-5">
                              <Notes
                                   notes={notes}
                                   onDelete={deleteNote}
                                   setNoteTitle={setNoteTitle}
                              />
                         </div>
                    ) : (
                         `You Currently  Have No Notes`
                    )}
               </div>
          );
     } else {
          return (
               <form onSubmit={updateNote}>
                    <Card
                         className="p-2"
                         style={{
                              width: "100%",
                              backgroundColor: "rgb(254, 208, 73)",
                         }}
                    >
                         <div className=" p-3 d-flex justify-content-between">
                              <span>Created On: {props.note.createdDate}</span>
                              <span>
                                   {props.note.updatedDate
                                        ? `Last Updated on: ` +
                                          props.note.updatedDate
                                        : ""}
                              </span>
                         </div>
                         <h1 className="display-5 ps-2 fw-bold">Edit Note</h1>
                         <Card.Body>
                              <Card.Title className="fs-4 fw-bold ">
                                   {
                                        <input
                                             style={{
                                                  fontSize: "2rem",
                                                  fontWeight: "bold",
                                                  border: "none",
                                                  backgroundColor:
                                                       "rgb(254, 208, 73)",
                                             }}
                                             type="text"
                                             id="noteTitle"
                                             defaultValue={noteTitle}
                                             onChange={(e) => {
                                                  setNoteTitle(e.target.value);
                                                  setUpdatedDate(
                                                       Moment().format(
                                                            "MMM Do YY"
                                                       )
                                                  );
                                             }}
                                        />
                                   }
                              </Card.Title>
                              <Card.Text>
                                   <textarea
                                        className="fs-4"
                                        style={{
                                             border: "none",
                                             backgroundColor:
                                                  "rgb(254, 208, 73)",
                                        }}
                                        type="textarea"
                                        value={noteText}
                                        id="noteText"
                                        onChange={(e) => {
                                             setNoteText(e.target.value);
                                              setUpdatedDate(
                                                  Moment().format("MMM Do YY")
                                             );
                                        }}
                                        required
                                   />
                              </Card.Text>
                              <Card.Subtitle className="mb-2 text-muted ">
                                   <input
                                        className="rounded-pill p-2 ps-5 pe-5 mt-3"
                                        style={{
                                             backgroundColor:
                                                  "rgb(173, 231, 146)",
                                        }}
                                        type="submit"
                                        value="Update"
                                   />
                              </Card.Subtitle>
                         </Card.Body>
                    </Card>
               </form>
          );
     }
}

export default NotesForm;
