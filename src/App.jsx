import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';

import './App.css';
import FormSignUp from './components/FormSignUp';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<FormSignUp />} />
      </Routes>
    </>
  );
}

export default App;
