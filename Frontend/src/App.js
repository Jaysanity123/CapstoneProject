import React, {useState, useEffect} from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isOpens, setIsOpens] = useState(false)

  const toggles = () => {
    setIsOpens(!isOpens);
  };

  useEffect(() =>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i resized')
      }
    }
      window.addEventListener('resize', hideMenu)

      return () => {
        window.removeEventListener('resize', hideMenu);
      }
  })

  return (
    <div className="App">
      <Navbar isOpen={isOpen} isOpens={isOpens} toggle={toggle} toggles={toggles}/>
      <Dropdown isOpen={isOpen} isOpens={isOpens} toggle={toggle} toggles={toggles}/>
    </div>
  );
}

export default App;
