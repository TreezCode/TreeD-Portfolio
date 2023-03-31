// external imports
import { BrowserRouter } from 'react-router-dom';
// internal imports
import { Layout, StarsCanvas, CustomScroll } from './components';
import {
  About,
  Hero,
  Experience,
  Tech,
  Projects,
  Feedbacks,
  Contact,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Layout>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Projects />
          <Feedbacks />
          <div className='relative z-0 overflow-hidden'>
            <Contact />
            <StarsCanvas />
          </div>
        </Layout>
      </div>
      <CustomScroll />
    </BrowserRouter>
  );
};

export default App;
