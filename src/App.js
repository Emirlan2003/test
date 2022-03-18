import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User/User';
import Bio from './components/childComponents/Bio'
import Login from './components/childComponents/Login'
import Tasks from './components/childComponents/Tasks'
import Header from './components/Header/Header';



const App = () => {
  return (
    <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Tasks />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;