import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('profile/');
        setProfile(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProfile();
  }, []);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      await api.post('change-password/', { old_password: oldPass, new_password: newPass });
      setMsg('✅ Password changed successfully!');
      setOldPass('');
      setNewPass('');
    } catch (error) {
      setMsg('❌ ' + (error.response?.data?.error || 'Error changing password'));
    }
  };

  if (!profile) return <div className="container mt-5">Loading profile...</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>👋 Welcome, {profile.full_name}!</h2>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5>Your Profile</h5>
          <p><strong>Student ID:</strong> {profile.student_id}</p>
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>DOB:</strong> {profile.date_of_birth}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Address:</strong> {profile.address}</p>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="card mt-4">
        <div className="card-body">
          <h5>🔑 Change Password</h5>
          {msg && <div className="alert alert-info">{msg}</div>}
          <form onSubmit={handleChangePassword}>
            <input type="password" className="form-control mb-2" placeholder="Old Password" value={oldPass} onChange={(e) => setOldPass(e.target.value)} required />
            <input type="password" className="form-control mb-2" placeholder="New Password" value={newPass} onChange={(e) => setNewPass(e.target.value)} required />
            <button type="submit" className="btn btn-warning">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;