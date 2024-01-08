// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Project from './components/Project';
// import Main from './components/Main';

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className='absolute w-screen'>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
        <div className='absolute'>
          <Main></Main>
        </div>
        <div className='relative'>
          <About></About>
        </div>
      </div>
      <div className='felx flex-col relative bg-white'>
    <Overview></Overview>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
      </div>
      {/* <div className='felx flex-col relative bg-white'>
    
      </div> */}

    </div>
  );
}

export default App;
