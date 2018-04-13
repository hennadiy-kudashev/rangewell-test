import React from 'react';

const Idea = ({ title, body, created_date }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-muted">{new Date(created_date).toString()}</small>
        </p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">Delete</a>
      </div>
    </div>
  );
};
export default Idea;