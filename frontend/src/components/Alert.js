import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  const capitalize = (word) => {
    if (word === 'danger') {
      word = 'error';
    }
    let lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role='alert'>
          {capitalize(props.alert.type)}: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

// Define PropTypes for the Alert component
Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};
