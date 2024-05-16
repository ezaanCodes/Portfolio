import React from 'react'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import { Route, Routes } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const linksArray = ["Hero", "AboutMe", "Projects", "Contact"]

function Home() {



  return (
    <div>
      <NavigationBar />
       <Hero/>
       <AboutMe />
       <Projects />
       <Contact />
       <Footer />
    </div>
  )
}

export default Home