import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import noteContext from '../context/notes/noteContext';

function NotesItem(props) {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div className='col-md-3'>
      <div className='card my-3'>
        <div className='card-body'>
          <div className='d-flex align-items-center'>
            <h5 className='card-title'>{note.title}</h5>
            <i className='fa-solid fa-trash mx-2' onClick={() => { deleteNote(note._id); props.showAlert('Deleted succesfully', 'success'); }}></i>
            <i className='fa-solid fa-pen-to-square mx-2 ' onClick={() => { updateNote(note); }}></i>
          </div>

          <p className='card-text'>
            {props.note.description};
          </p>

        </div>
      </div>
    </div>
  );
}

// Add prop validation for all the props used in the component
NotesItem.propTypes = {
  note: PropTypes.object.isRequired,
  updateNote: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default NotesItem;
