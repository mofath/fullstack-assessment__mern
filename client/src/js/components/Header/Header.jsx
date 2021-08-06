import React from 'react'; // , { useState }
import { Link } from 'react-router-dom';
import logoSrc from '../../../assets/images/header-logo.png';
import './header.scss';

export default function Header() {
  // const [activeNavItem, setActiveNavItem] = useState(0);

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo-link'>
          <img src={logoSrc} alt='header-logo' className='header__logo' />
        </Link>
        <div className='header__welcome-text'>Hi, Sign in!</div>
      </div>
    </header>
  );
}
