import Card from 'react-bootstrap/Card';
import { BsFillTrashFill } from "react-icons/bs";


const Note = ({note, onDelete}) => {


     return (

          <div className="note m-1 shadow " style={{ cursor: 'pointer'}}>
             <Card style={{ width: '18rem' , backgroundColor: 'rgb(243, 236, 176)' }}>
      <Card.Body>
        <Card.Title className="fs-4 fw-bold d-flex justify-content-between" >{note.noteTitle}:<BsFillTrashFill className='ms-5' onClick={()=>{
          window.confirm("Are you sure you want to delete your note?")
          onDelete(note.id)} } /></Card.Title> 
        <Card.Text className="fs-4">
         {note.noteText}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
      </Card.Body>
    </Card>
          </div>
     )
}

export default Note