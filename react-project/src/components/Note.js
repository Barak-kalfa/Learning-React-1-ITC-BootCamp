import Card from "react-bootstrap/Card";
import { BsFillTrashFill } from "react-icons/bs";
import MyVerticallyCenteredModal from "./Modal";
import { useState } from "react";

const Note = ({ note, onDelete }) => {
     const [modalShow, setModalShow] = useState(false);

     return (
          <div
               className="note m-1 shadow rounded "
               style={{ cursor: "pointer", height: "100%" }}
          >
               <Card
                    onClick={() => {
                         setModalShow(true);
                    }}
                    style={{
                         width: "18rem",
                         backgroundColor: "rgb(254, 208, 73)",
                    }}
               >
                    <Card.Body>
                         <Card.Title className="fs-4 fw-bold d-flex justify-content-between">
                              {note.noteTitle}:
                              <BsFillTrashFill
                                   className="ms-5"
                                   onClick={() => {
                                        window.confirm(
                                             "Are you sure you want to delete your note?"
                                        );
                                        onDelete(note.id);
                                   }}
                              />
                         </Card.Title>
                         <Card.Text className="fs-4">{note.noteText}</Card.Text>
                         <Card.Subtitle className="mb-2 text-muted">
                              {note.date}
                         </Card.Subtitle>
                    </Card.Body>
               </Card>

               <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    note={note}
               />
          </div>
     );
};

export default Note;
