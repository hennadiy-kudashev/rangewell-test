import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row p-3">
        {children}
      </div>
    </div>
  );
};

export default Layout;