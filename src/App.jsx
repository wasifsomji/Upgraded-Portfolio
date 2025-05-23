import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Volunteering from "./components/Volunteering";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-gradient-to-b from-dark-blue via-tertiary to-primary bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Volunteering />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
