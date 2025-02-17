import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProjectContext,urlContext } from './context/context';
import axios from 'axios';
import React from 'react';

function App() {
  const [getProject, setProject] = useState([]);
  // const url = 'https://portfoliobackend-a76l.onrender.com/api/v1'
  const url = 'https://portfoliobackend-a76l.onrender.com/api/v1';
// const url = 'http://localhost:5911/api/v1'
 
 
  useEffect(() => {
    console.log("-----------getProjectts___________________")
    axios.get(`${url}/getProjects`)
      .then(response => {
        setProject(response.data);

        console.log("..........responseData..........",response.data)
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <>
      <urlContext.Provider value={{url}}>
      <ProjectContext.Provider value={{ getProject, setProject }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ProjectContext.Provider>
      </urlContext.Provider>
    </>
  );
}

export default App;
