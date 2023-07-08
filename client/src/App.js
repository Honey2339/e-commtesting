import React, { useEffect, useState } from "react";
import Home from "./Component/Home";
import Everything from "./Component/Everything";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';

function App() {
  const location = useLocation();
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5050/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error fetching API data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Navbar />
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route
                path="/everything"
                element={<Everything
                  data = {backendData}
                />}
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;