import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import './Pages/Homepage/Homepage.css'
import './components/Navbar/Navbar.css'
import './Pages/Project_Edit/Project_Edit.css'
import './Pages/Time/Time.css'
import './Pages/ProjectCreation/ProjectCreation.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/Homepage/Homepage';
import EditPage from './Pages/Project_Edit/Project_Edit';
import Login from "./Pages/Login/Login";
import SignUpPage from "./Pages/SignUp/SignUp";
import TimePage from "./Pages/Time/Time";
import ProjectCreate from "./Pages/ProjectCreation/ProjectCreation";

import { Client } from 'appwrite';



export default function App() {
  const client = new Client();

  client
      .setEndpoint('http://localhost/v1')
      .setProject('RushHour');
      
  return (

    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />} /> 
          <Route path="/Create" element={<ProjectCreate />} /> 
          <Route path="/Edit" element={<EditPage />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/SignUp" element={<SignUpPage />} /> 
          <Route path="/Time" element={<TimePage />} />
          <Route path="/" element={<Navigate to="/Home" replace />} />
        </Routes> 
      </BrowserRouter>
    </div>

  );
}