import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Menu/NavBar';
import Notification from './Menu/Notification';
import { Stack } from '@chakra-ui/react';
import About from './Menu/About';
import Reward from './Menu/Reward';
import Footer from './Menu/Footer';
import Tutorial from './Menu/Tutorial';

function App() {
  return (
    <>
    <Stack>
      <NavBar></NavBar>
      <About></About>
      <Reward></Reward>
      <Tutorial></Tutorial>
      <Footer></Footer>
    </Stack>
    
    <Notification></Notification>
    </>
    
    
  );
}

export default App;
