import Modal from "react-bootstrap/Modal";
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
                    noteUpdatedDate={props.note.updatedDate}
                    modalShow={props.show}
                    onHide={props.onHide}
               />
          </Modal>
     );
}

export default NoteModal;
