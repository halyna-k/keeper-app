import React, { useState } from "react";
import { Fab, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState ({ title: '', content: '' });
  const [isExpanded, setIsExpanded] = useState (false)

  function handleChange (e) {
    const { name, value } = e.target;
    setNote( prev => ({...prev, [name]: value}));
  }

  function submitNote (e) {
    props.onAdd(note);
    setNote({title: '', content: ''})
    e.preventDefault();
  }
  function expand () {
    setIsExpanded(true);
  }
  
  return (
    <div>
      <form className="create-note">
       { isExpanded &&
          <input 
          name="title" 
          value={note.title} 
          onChange={handleChange} 
          placeholder="Title" 
          /> }
        <textarea 
          name="content" 
          onClick={expand}
          value={note.content} 
          onChange={handleChange} 
          placeholder="Take a note..." 
          rows={ isExpanded ? 3 : 1 } 
        />
          <Zoom in={isExpanded} >
            <Fab onClick={submitNote} aria-label="add">
              <AddIcon />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
