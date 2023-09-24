import React from 'react';
import { useState } from 'react';
import NoteContext from './noteContext';
import PropTypes from 'prop-types';

const NoteState = (props) => {
  const host='http://localhost:5000' 
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      // Make the API call to fetch notes
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });

      // Check if the response is successful
      if (response.ok) {
        const json = await response.json();
        setNotes(json);
      } else {
        // Handle error here, e.g., show an error message or log the error
        console.error(
          'Error fetching notes:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      // Handle any network or other errors here
      console.error('Error fetching notes:', error);
    }
  };

  // For Adding Notes
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // For Deleting Notes
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);

    // console.log('deleted with' + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // For Editing Notes
  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

// Add prop validation for children
NoteState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoteState;
