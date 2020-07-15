import React, { Fragment } from 'react';
import loader from './loader.gif';

const Loader = () => {
  return (
    <Fragment>
      <img
        src={loader}
        alt='Loading. . .'
        style={{
          width: '70%',
          margin: 'auto',
          display: 'block',
        }}
      />
    </Fragment>
  );
};

export default Loader;
