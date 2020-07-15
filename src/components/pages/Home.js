import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => {
  const name = 'Let the search begin . . . ';
  const showName = true;

  return (
    <Fragment>
      <Search
      //searchUsers={searchUsers} => now can be accessed through context
      // clearUsers={clearUsers}
      // showClear={users.length > 0 ? true : false}
      //showAlert={showAlert}
      />
      <div className='body'>
        <br />
        <div className='line type'>{<p>{showName && name}</p>}</div>
        <div className='container'></div>
      </div>
      <Users /*loading={loading} users={users}*/ />
    </Fragment>
  );
};

export default Home;
