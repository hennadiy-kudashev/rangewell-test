import React from 'react';
import './Idea.css';
import trashIcon from 'resources/trash-icon.svg';
import { removeIdea } from 'actions/ideasActions';
import { connect } from 'react-redux';
import IdeaTitle from './IdeaTitle';

const Idea = ({ id, title, body, created_date, removeIdea }) => {
  const handleRemove = () => {
    removeIdea(id);
  };

  return (
    <div className="card">
      <IdeaTitle id={id} title={title} />
      <div className="card-body">
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-muted">{new Date(created_date).toString()}</small>
        </p>
      </div>
      <div className="card-footer">
        <button type="button" className="btn" onClick={handleRemove}>
          <img src={trashIcon} alt="Delete"/> <span className="text-danger">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default connect(null, {
  removeIdea
})(Idea);