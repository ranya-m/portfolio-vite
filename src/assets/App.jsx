import React from 'react';
import Navbar from './components/smallCompos/navbar';
import Home from './components/sections/home/home';
import About from './components/sections/about/about';
import Projects from './components/sections/projects/projects';
import Contact from './components/sections/contact/contact';
import Footer from './components/smallCompos/footer';
import Socials from './components/smallCompos/socials.jsx';



export default function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={`h-full w-full mx-auto py-2
    ${darkMode ? "dark" : ""}
    `}>
      <Socials/>
       <Navbar 
           darkMode={darkMode} 
           toggleDarkMode={toggleDarkMode} 
       />
       <Home darkMode={darkMode}/>
       <About/>
       <Projects darkMode={darkMode}/>
       <Contact/>
       <Footer/>
    </div>
  )
}
