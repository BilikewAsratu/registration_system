import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

// Protected Route wrapper
const PrivateRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  
  if (requiredRole === 'admin' && !user.is_staff) {
    return <Navigate to="/student-dashboard" />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-dashboard" element={
        <PrivateRoute><StudentDashboard /></PrivateRoute>
      } />
      <Route path="/admin-dashboard" element={
        <PrivateRoute requiredRole="admin"><AdminDashboard /></PrivateRoute>
      } />
    </Routes>
  );
}

export default App;