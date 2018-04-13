import React from 'react';
import { addIdea } from 'actions/ideasActions';
import { connect } from 'react-redux';

const AddIdea = ({ addIdea }) => {
  const handleClick = () => {
    addIdea();
  };
  return (
    <button type="button" className="btn btn-secondary" onClick={handleClick}>Add Idea</button>
  );
};

export default connect(null, { addIdea })(AddIdea);