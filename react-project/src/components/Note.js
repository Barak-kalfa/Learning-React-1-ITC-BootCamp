import Card from "react-bootstrap/Card";
import { BsFillTrashFill } from "react-icons/bs";
import NoteModal from "./Modal";
import { useState } from "react";

const Note = ({ note, onDelete }) => {
     const [modalShow, setModalShow] = useState(false);

     return (
          <div
               className="note m-1 shadow rounded "
               style={{ cursor: "pointer", height: "100%" }}
          >
               <Card
                    onClick={() => setModalShow(true)}
                    style={{
                         maxWidth: "30rem",
                         backgroundColor: "rgb(254, 208, 73)",
                    }}
               >
                    <Card.Body>
                         <Card.Title className="fs-3 fw-bold  ">
                              {note.noteTitle}:
                         </Card.Title>
                         <Card.Text className="fs-4  text-break ">
                              {note.noteText}
                         </Card.Text>
                         <Card.Subtitle className="mb- text-muted d-flex justify-content-between align-items-end">
                              Created on: {note.createdDate}
                              <br></br>
                              {note.updatedDate
                                   ? `Last Updated on: ` + note.updatedDate
                                   : note.updatedDate}
                              <BsFillTrashFill
                                   className="ms-3"
                                   onClick={() => {
                                        if (
                                             window.confirm(
                                                  "Are you sure you want to delete your note?"
                                             )
                                        ) {
                                             onDelete(note.id);
                                        }
                                   }}
                              />
                         </Card.Subtitle>
                    </Card.Body>
               </Card>

               <NoteModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    note={note}
               />
          </div>
     );
};

export default Note;
