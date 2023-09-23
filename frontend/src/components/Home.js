import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import Notes from './Notes';

export const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

// Add prop validation
Home.propTypes = {
  showAlert: PropTypes.func.isRequired, // showAlert should be a required function prop
};

export default Home;
