import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listNotes, setListNotes] = useState([]);

  function addNote (newNote) {
    setListNotes(prev => ([...prev, newNote]))
  }

  function deleteNote (id) {
    setListNotes(prev => prev.filter(( _, index) => (index !== id)))
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        listNotes.map(( item, index ) => (
          <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote} />
        ))
      } 
      <Footer />
    </div>
  );
}

export default App;
