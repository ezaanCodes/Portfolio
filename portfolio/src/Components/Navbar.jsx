import React from 'react'
import { AppBar, Box, Grid, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material'
import Logo from "../Assets/logo.png";
import { useState } from 'react';
import DrawerComp from '../Assets/DrawerComp';
import Hero from './Hero';
import Contact from './Contact';
import Projects from './Projects';
import AboutMe from './AboutMe';

const Navbar = ({ linksArray }) => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatch);
  const [value, setValue] = useState(0);

  // const [activeTab, setActiveTab] = useState('Home'); // Initialize activeTab state with 'Home'
  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  // };

  return (

    <div>
      <AppBar sx={{ backgroundColor: 'white', color:'#2d2e32' }}>
        <Toolbar>

          <Grid item xs={2}>
            <Box
              component="img"
              sx={{
                height: 38,
              }}
              alt="Your logo."
              src={Logo}
            />
          </Grid>

          {isMatch ?
            (
              <>
                <DrawerComp linksArray={linksArray}/>
              </>
            )
            :
            (
              
              <Grid sx={{ placeItems: "end" }} container >
                
                <Grid item xs={12} >
                  <Box display="flex"
                    justifyContent="flex-end"
                  >
                    <Tabs

                      indicatorColor='primary'
                      textColor='black'
                      value={value}
                      onChange={(e, val) => setValue(val)}
                    >

                      {linksArray.map((link, index) => (
                        <Tab label={link} key={index}>{link}</Tab>
                      ))}
                    </Tabs>
                  </Box>
                </Grid>
                        
              </Grid>
            )
          }

        </Toolbar>

      </AppBar>
      {/* {activeTab === 'Hero' && <Hero />}
      {activeTab === 'AboutMe' && <AboutMe />}
      {activeTab === 'Projects' && <Projects />}
      {activeTab === 'Contact' && <Contact />} */}
    </div >
  )
}

export default Navbar