import React from 'react';
import Spin from './Spin';
import cx from 'classnames';
import './Loading.css';

const Loading = ({ loading = true, children, fullScreen = false }) => {
  const contextClasses = ['loading-content', { hidden: loading }];
  const classes = ['app-loading', { 'full-screen': fullScreen }];
  return (
    <div className={cx(classes)}>
      {loading && <Spin className="loading" />}
      <div className={cx(contextClasses)}>{children}</div>
    </div>
  );
};

export default Loading;
