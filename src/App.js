import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './styles/main.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <div className="college-header">
          <h1>Islamabad College for Boys G-6/3</h1>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="college-header">
        <h1>Islamabad College for Boys G-6/3</h1>
      </div>
      <Router>
        <div className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Navigate to="/dashboard" /> : <Login />} 
            />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/dashboard" /> : <Login />} 
            />
            <Route 
              path="/signup" 
              element={user ? <Navigate to="/dashboard" /> : <Signup />} 
            />
            <Route 
              path="/forgot-password" 
              element={user ? <Navigate to="/dashboard" /> : <ForgotPassword />} 
            />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute user={user}>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;