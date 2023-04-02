// external imports
import { Link } from 'react-router-dom';
// internal imports
import { socials } from '../../common/constants';

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col items-center text-center p-2 bg-primary'>
        <p className='icons flex gap-2 p-2'>
          {socials.map((social) => (
            <Link to={social.link} target='_blank' key={social.title}>
              <social.Icon className='inline-block text-[2.25rem] text-logoAccent border-2 border-accent rounded-full p-[7px] xs:hover:text-primary xs:hover:bg-accent xs:hover:scale-110 active:text-primary active:bg-accent active:scale-110 transition duration-500 mx-1' />
            </Link>
          ))}
        </p>
        <p className='text-secondary py-2'>2023 ©TreezCode All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
