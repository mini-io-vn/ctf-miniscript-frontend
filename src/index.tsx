import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { DataProvider } from './Data/process';
import About from './Menu/About';
import Footer from './Menu/Footer';
import NavBar from './Menu/NavBar';
import Reward from './Menu/Reward';
import Tutorial from './Menu/Tutorial';
import Notification from './Menu/Notification';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Leaderboard from '@mui/icons-material/Leaderboard';
import LeaderboardPage from './Menu/Leaderboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <DataProvider>
        <>
          <Stack>
            <NavBar></NavBar>
            <BrowserRouter>
              <Routes>
                <Route path="" element={<App />} />
                <Route path="/bxh" element={<LeaderboardPage />} />
              </Routes>
            </BrowserRouter>
            <Footer></Footer>
          </Stack>

          <Notification></Notification>
        </>
      </DataProvider>
    </ChakraProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
