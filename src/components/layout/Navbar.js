import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar'>
      <h3>
        <ul>
          <i className={icon}></i>
          <li>{title}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </h3>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Navbar',
  icon: 'fas fa-atom',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
