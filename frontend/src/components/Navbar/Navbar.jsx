// external imports
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// internal imports
import { navLinks, navLinksSecondary, socials } from '../../common/constants';
import { logo } from '../../common/assets';
import { styles } from '../../styles';
import MenuIcon from '../MenuIcon/MenuIcon';

import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [menuActive, setMenuActive] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);

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
    setActiveLink('');
    window.scrollTo(0, 0);
    menuActive && toggleMenu();
  };

  const handleMenuClick = (link) => {
    setActiveLink(link.title);
    toggleMenu();
  };

  const handleNavbarClick = (link) => {
    setActiveLink(link.title);
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
              className='brand text-[1.6rem] text-[#915eff]'
              onClick={handleLogoClick}
            >
              TreezCode
            </Link>
            <div className='nav-container-inner my-0 mx-auto w-full max-w-[1000px] flex justify-between items-center'>
              <ul className='navlinks w-full my-0 mx-2'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      activeLink === link.title ? 'scale-110' : ''
                    } text-[18px] font-medium cursor-pointer inline-block px-2 `}
                    onClick={() => handleNavbarClick(link)}
                  >
                    <a href={`#${link.id}`} className='hover:text-secondary'>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <form>
                <div className='input-wrap flex justify-center items-center py-2'>
                  <input
                    type='search'
                    placeholder='Search...'
                    className='px-1'
                  />
                  <button type='submit'>
                    <FaSearch className='transition duration-300 hover:text-accent' />
                  </button>
                </div>
              </form>
            </div>
            <div className='hover:text-secondary ml-auto scale-50' onClick={toggleMenu}>
              <MenuIcon active={menuActive} color={styles.accent} />
            </div>
          </div>
        </div>

        <div
          ref={menuRef}
          className='menu bg-primary fixed top-0 left-0 w-full text-center text-[1.3rem] h-full -translate-y-full opacity-0 menu-nonactive'
          style={{ transition: '0.7s cubic-bezier(0.74, -0.03, 0.83, 0.67)' }}
        >
          <div className='flex justify-center flex-col p-1 pt-[5rem] h-full xs:w-80 w-60 m-auto overflow-hidden'>
            <img
              src={logo}
              alt='logo'
              className='logo w-[4rem] h-[4rem] mx-auto'
            />
            <div className='link-group'>
              <ul className='navlinks'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      activeLink === link.title ? 'scale-110' : ''
                    } text-[18px] font-medium`}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => handleMenuClick(link)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className='navlinks-secondary'>
                {navLinksSecondary.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      activeLink === link.title ? 'scale-110' : ''
                    } text-[18px] font-medium`}
                  >
                    {!link.url ? (
                      <a
                        href={`#${link.id}`}
                        onClick={() => handleMenuClick(link)}
                      >
                        {link.title}
                      </a>
                    ) : (
                      <a
                        href={`${link.url}`}
                        target='_blank'
                        onClick={() => handleMenuClick(link)}
                      >
                        {link.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <ul className='social-media py-4'>
              {socials.map((social) => (
                <li key={social.title}>
                  <Link to={social.link} target='_blank'>
                    <social.Icon className='text-[1.25rem] inline-block hover:text-accent hover:scale-110 transition' />
                  </Link>
                </li>
              ))}
            </ul>
            <form>
              <div className='input-wrap flex justify-center items-center py-2'>
                <input
                  type='search'
                  placeholder='Search...'
                  className='text-[1rem] max-w-[60%]'
                />
                <button type='submit'>
                  <FaSearch className='hover:text-accent duration-300 transition' />
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