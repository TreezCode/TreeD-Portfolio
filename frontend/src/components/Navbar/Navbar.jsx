import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaBars,
  FaWindowClose,
} from 'react-icons/fa';

import { navLinks, navLinksSecondary, socials } from '../../common/constants';
import { logo } from '../../common/assets';

import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const menuElement = menuRef.current;
    menuElement.classList.toggle('menu-open');

    // Disable scrolling when menu is open
    const bodyElement = document.querySelector('body');
    if (menuOpen) {
      bodyElement.style.overflow = 'auto';
    } else {
      bodyElement.style.overflow = 'hidden';
    }
  };

  const handleLogoClick = () => {
    setActiveLink('');
    window.scrollTo(0, 0);
    menuOpen && toggleMenu();
  };

  const handleMenuClick = (link) => {
    setActiveLink(link.title);
    toggleMenu();
  };

  const handleNavbarClick = (link) => {
    setActiveLink(link.title);
    menuOpen && toggleMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const offset = 50;
      const scrollPos = window.scrollY;

      if (scrollPos > offset) {
        navbar.classList.add('navbar-active');
      } else {
        navbar.classList.remove('navbar-active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        id='navbar'
        className='navbar fixed top-0 left-0 w-full p-6 z-50 text-white overflow-y-hidden'
        style={{ transition: '0.7s' }}
      >
        <div
          ref={menuRef}
          className='menu bg-primary fixed top-0 left-0 w-full text-center text-[1.3rem] h-full -translate-y-full opacity-0'
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
            <ul className='social-media py-8'>
              {socials.map((social) => (
                <li key={social.title}>
                  <Link to={social.link} target='_blank'>
                    <social.Icon className='text-[1.25rem] inline-block hover:text-accent hover:scale-110 transition'/>
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
                  <FaSearch className='hover:text-secondary transition' />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='nav-container max-w-[1350px] relative grid justify-between items-center my-0 mx-auto'>
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
                  <a href={`#${link.id}`} className='hover:text-secondary'>{link.title}</a>
                </li>
              ))}
            </ul>
            <form>
              <div className='input-wrap flex justify-center items-center py-2'>
                <input type='search' placeholder='Search...' className='px-1' />
                <button type='submit'>
                  <FaSearch className='transition duration-300 hover:text-secondary' />
                </button>
              </div>
            </form>
          </div>

          {!menuOpen ? (
            <FaBars
              id='menu-btn'
              className='text-[1.2rem] cursor-pointer transition duration-300 hover:text-secondary ml-auto'
              onClick={toggleMenu}
            />
          ) : (
            <FaWindowClose
              id='menu-btn'
              className='text-[1.2rem] cursor-pointer transition duration-300 hover:text-secondary ml-auto'
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
