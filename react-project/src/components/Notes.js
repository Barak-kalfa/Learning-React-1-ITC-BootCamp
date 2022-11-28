import Note from "./Note"



function Notes({notes}) {
     
  return (
     <div className="  flex-wrap d-flex" >
     {notes.map((note) => (
          <Note key ={note.date} note={note} />
     ))}
      </ div>
  )
 
}

export default Notes