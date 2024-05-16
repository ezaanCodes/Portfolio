import React from 'react'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NavigationBar from '../Components/NavigationBar'
// import { createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const linksArray = ["Hero", "AboutMe", "Projects", "Contact"]

function Home() {



  return (
    <div>
      {/* <HashLink to='#AboutMe'>

      </HashLink> */}
      {/* <Navbar linksArray={linksArray}/> */}
      <NavigationBar />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer /> */}

       <Hero/>
       <AboutMe />
       <Projects />
       <Contact />
       <Footer />
    </div>
  )
}

export default Home