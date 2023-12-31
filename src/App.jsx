import { HashRouter } from "react-router-dom";
import { About, Contact, Experience, Navbar, Tech, Works, StarsCanvas, EarthCanvas } from "./components";
// Feedbacks, Hero,

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Hero />} */}
          {/* <StarsCanvas /> */}
        </div>
        <About />
        <Experience />
        <div className='relative z-0'>
          <Tech />
          <StarsCanvas />
        </div>
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
