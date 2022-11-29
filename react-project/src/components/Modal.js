import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
     return (
          <Modal
               style={{ backgroundColor: "#ffffff" }}
               {...props}
               aria-labelledby="contained-modal-title-vcenter"
               centered
          >
               <Modal.Header
                    closeButton
                    style={{ backgroundColor: "rgb(254, 208, 73)" }}
               >
                    <Modal.Title id="contained-modal-title-vcenter">
                         <h4>Title: {props.note.noteTitle}</h4>
                    </Modal.Title>
               </Modal.Header>
               <Modal.Body
                    className="d-flex justify-content-center"
                    style={{ backgroundColor: "rgb(254, 208, 73)" }}
               >
                    <p>{props.note.noteText}</p>
               </Modal.Body>
               <Modal.Footer
                    className="d-flex justify-content-between "
                    style={{ backgroundColor: "rgb(254, 208, 73)" }}
               >
                    Date: {props.note.date}
                    <Button onClick={props.onHide}>Close</Button>
               </Modal.Footer>
          </Modal>
     );
}

export default MyVerticallyCenteredModal;
