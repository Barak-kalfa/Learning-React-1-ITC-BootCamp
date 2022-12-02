import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NotesForm from "./Form";

function NoteModal(props) {


     return (
          <Modal
               style={{ backgroundColor: "#ffffff" }}
               {...props}
               aria-labelledby="contained-modal-title-vcenter"
               centered
          >
              <NotesForm 
              note={props.note}
              noteCardTitle={props.note.noteTitle}
              noteCardText={props.note.noteText}
              noteCardDate={props.note.createdDate}
              noteUpdatedDate={props.note.updatedDate}
              noteCardId={props.note.id}
              show={props.show}
              onHide={props.onHide}
        
               />
              
          </Modal>
     );
}

export default NoteModal;
