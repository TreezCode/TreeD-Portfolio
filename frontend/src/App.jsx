// external imports
import { BrowserRouter } from 'react-router-dom';
// internal imports
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Projects,
  Feedbacks,
  Contact,
  Footer,
  StarsCanvas,
  CustomScroll,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
        <div className='relative z-0 overflow-hidden'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
      <CustomScroll />
    </BrowserRouter>
  );
};

export default App;
