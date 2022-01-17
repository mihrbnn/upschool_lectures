import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`py-5 ${theme.backgroundColor} ${theme.color}`}>
        <div className="row">
          <div className="col-sm-12">
            <h1>Footer</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
