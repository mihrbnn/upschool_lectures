import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = (props) => {
  const { theme } = useContext(ThemeContext);
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <nav className={`navbar navbar-expand-lg ${theme.navbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Anasayfa
            </Link>
            <Link className="nav-link" to="/about">
              Hakkımızda
            </Link>
            <Link className="nav-link" to="/user-profile">
              Kullanıcı Profili
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
