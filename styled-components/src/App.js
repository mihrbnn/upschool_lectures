import React from 'react';
import {useContext} from "react"
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { styledComponentsTheme } from './styledComponents';
import {ThemeContext} from "./contexts/ThemeContext"


export default function App() {
  const {themeName} = useContext(ThemeContext)
  return (
    <ThemeProvider theme={styledComponentsTheme[themeName]}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
