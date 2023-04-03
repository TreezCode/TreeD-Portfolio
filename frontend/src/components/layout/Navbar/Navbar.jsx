// external imports
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// internal imports
import {
  navLinks,
  navLinksSecondary,
  socials,
} from '../../../common/constants';
import { logo } from '../../../common/assets';
import { styles } from '../../../styles';
import { MenuIcon } from '../../global';
import { useActiveSection } from '../../../utils/useActiveSection';
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);

  const activeSection = useActiveSection();
  
  const toggleMenu = () => {
    setMenuActive(!menuActive);
    const menuElement = menuRef.current;
    menuElement.classList.toggle('menu-active');

    const bodyElement = document.querySelector('body');
    if (menuActive) {
      bodyElement.style.overflow = 'auto';
    } else {
      bodyElement.style.overflow = 'hidden';
    }
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    menuActive && toggleMenu();
  };

  const handleMenuClick = (link) => {
    toggleMenu();
  };

  const handleNavbarClick = (link) => {
    menuActive && toggleMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const navElement = navRef.current;
      const offset = 50;
      const scrollPos = window.scrollY;

      if (scrollPos > offset) {
        navElement.classList.add('navbar-active');
      } else {
        navElement.classList.remove('navbar-active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className='fixed top-0 left-0 w-full z-50 text-white overflow-y-hidden'>
        <div ref={navRef} className='nav-container relative w-full z-50 p-6'>
          <div className='nav-content max-w-[1350px] relative grid justify-between items-center my-0 mx-auto'>
            <Link
              to={'/'}
              className='brand text-[1.75rem] text-[#915eff] xs:hover:opacity-60 active:opacity-60 transition duration-300'
              onClick={handleLogoClick}
            >
              TreezCode
            </Link>
            <div className='nav-container-inner my-0 mx-auto w-full max-w-[1000px] flex justify-between items-center px-6'>
              <ul className='navlinks flex gap-4 w-full'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                     activeSection && activeSection.includes(link.title.toLowerCase()) ? 'active-link' : ''
                    } text-[16px] font-medium cursor-pointer inline-block`}
                    onClick={() => handleNavbarClick(link)}
                  >
                    <a href={`#${link.id}`} className='lg:hover:opacity-60'>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <form className='hidden lg:block'>
                <div className='input-wrap flex justify-center items-center gap-1'>
                  <input type='search' placeholder='Search...' />
                  <button type='submit'>
                    <FaSearch className='transition duration-300 hover:opacity-60' />
                  </button>
                </div>
              </form>
            </div>
            <div
              className='xs:hover:opacity-60 active:opacity-60 transition duration-300'
              onClick={toggleMenu}
            >
              <MenuIcon
                active={menuActive}
                color={styles.accent}
                className='ml-auto'
              />
            </div>
          </div>
        </div>

        <div
          ref={menuRef}
          className='menu bg-primary fixed top-0 left-0 w-full text-center text-[1.3rem] h-full -translate-y-full opacity-0 menu-nonactive'
          style={{ transition: '0.7s cubic-bezier(0.74, -0.03, 0.83, 0.67)' }}
        >
          <div className='flex justify-center flex-col p-1 pt-[5rem] h-full xs:w-80 w-60 m-auto overflow-hidden'>
            <Link
              to={'/'}
              onClick={handleLogoClick}
              className='w-[5rem] h-[5rem] mx-auto'
            >
              <img
                src={logo}
                alt='logo'
                className='logo border-2 border-accent rounded-full p-1 xs:hover:scale-105 transition duration-500'
              />
            </Link>
            <div className='link-group'>
              <ul className='navlinks'>
                {navLinks.map((link) => (
                  <li key={link.id} className={activeSection && activeSection.includes(link.title.toLowerCase()) ? 'active-link' : ''}>
                    <a href={`#${link.id}`} onClick={() => handleMenuClick(link)} >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className='navlinks-secondary'>
                {navLinksSecondary.map((link) => (
                  <li key={link.id} className={activeSection && activeSection.includes(link.title.toLowerCase()) ? 'active-link' : ''}>
                    {!link.url ? (
                      <a href={`#${link.id}`} onClick={() => handleMenuClick(link)}>
                        {link.title}
                      </a>
                    ) : (
                      <a href={`${link.url}`} target='_blank' onClick={() => handleMenuClick(link)}>
                        {link.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <ul className='social-media'>
              {socials.map((social) => (
                <li key={social.title} className='inline-block px-1'>
                  <Link to={social.link} target='_blank'>
                    <social.Icon className='inline-block text-[2.25rem] text-logoAccent border-2 border-accent rounded-full p-[7px] xs:hover:text-primary xs:hover:bg-accent xs:hover:scale-110 active:text-primary active:bg-accent transition duration-500' />
                  </Link>
                </li>
              ))}
            </ul>
            <form>
              <div className='input-wrap flex justify-center items-center gap-1'>
                <input
                  type='search'
                  placeholder='Search...'
                  className='text-[1rem] max-w-[60%]'
                />
                <button type='submit'>
                  <FaSearch className='transition duration-300 hover:opacity-60' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
