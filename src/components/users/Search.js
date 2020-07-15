import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState(''); //state definition
  // const { searchUsers, clearUsers } = githubContext;
  // const { showAlert } = alertContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.showAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Seach Users...'
          className='srch'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value=' Search ' className='btn btn-dark' />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-blck'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
