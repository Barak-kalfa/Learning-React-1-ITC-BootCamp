import Card from 'react-bootstrap/Card';

const Note = ({note}) => {


     return (
          <div className="note m-1 shadow" style={{ cursor: 'pointer'}}>
             <Card style={{ width: '18rem' , backgroundColor: 'rgb(243, 236, 176)' }}>
      <Card.Body>
        <Card.Title style={{}}>{note.noteTitle}</Card.Title> 
        
        <Card.Text>
         {note.noteText}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
      </Card.Body>
    </Card>
          </div>
     )
}

export default Note