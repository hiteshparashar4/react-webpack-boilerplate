import React from 'react';
import './footer.scss';
import github from '../../../assets/github.png';

const Footer = () => {
  return (
    <div className='footer'>
      <img className='github-icon' src={github} />
      <a
        href='https://github.com/hiteshparashar4/react-webpack-boilerplate'
        rel='noreferrer'
        target='_blank'
      >
        View Source Code
      </a>
    </div>
  );
};

export default Footer;
