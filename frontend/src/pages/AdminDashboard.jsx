import React from 'react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>🛡️ Admin Panel</h2>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
      <p>Welcome Admin {user?.username}!</p>
      <div className="alert alert-info">You have full access to all student records. (Extend this with a student list API endpoint).</div>
    </div>
  );
};

export default AdminDashboard;