import Card from "react-bootstrap/Card";
import { BsFillTrashFill } from "react-icons/bs";
import NoteModal from "./Modal";
import Moment from "moment";


import { useState } from "react";

const Note = ({ note, onDelete}) => {
     const [modalShow, setModalShow] = useState(false);
     function handleCard(e) {
          setModalShow(true)
     }
     
     return (
          <div
               className="note m-1 shadow rounded "
               style={{ cursor: "pointer", height: "100%" }}
          >
               <Card onClick= {handleCard}
                    className="d-flex flex-wrap"
                    style={{
                         width: "20rem",
                         backgroundColor: "rgb(254, 208, 73)",
                    }}
               >
                    <Card.Body>
                         <Card.Title className="fs-4 fw-bold d-flex justify-content-between flex-wrap">
                              {note.noteTitle}:
                              
                         </Card.Title>
                         <Card.Text  
                    className="fs-4">
                              {note.noteText}</Card.Text>
                         <Card.Subtitle className="mb- text-muted d-flex ">
                       {  note.updatedDate ? `Last Updated on: ` + note.updatedDate :note.updatedDate }
                         <br></br>
                              Created on: {note.createdDate}
                              <BsFillTrashFill
                                   className="ms-5"
                                   onClick={() => {
                                     
                                       if (window.confirm("Are you sure you want to delete your note?")) { onDelete(note.id) }
                                        
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
