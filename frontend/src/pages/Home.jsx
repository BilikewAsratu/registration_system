import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', email: '', 
    date_of_birth: '', phone: '', address: ''
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const response = await api.post('register/', formData);
      // Display the generated credentials!
      setMessage({
        type: 'success',
        data: response.data // Contains username, password, student_id
      });
      setFormData({ first_name: '', last_name: '', email: '', date_of_birth: '', phone: '', address: '' });
    } catch (error) {
      setMessage({ type: 'danger', text: 'Registration failed. Check your data.' });
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">🎓 Student Registration</h2>
          
          {/* Show generated credentials */}
          {message && message.type === 'success' && (
            <div className="alert alert-success">
              <h5>✅ Registration Successful!</h5>
              <p><strong>Student ID:</strong> {message.data.student_id}</p>
              <p><strong>Username:</strong> <code>{message.data.username}</code></p>
              <p><strong>Password:</strong> <code>{message.data.password}</code></p>
              <p className="mb-0"><small>Please save these credentials. You can change the password after login.</small></p>
            </div>
          )}
          {message && message.type === 'danger' && (
            <div className="alert alert-danger">{message.text}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3"><input type="text" name="first_name" className="form-control" placeholder="First Name" onChange={handleChange} required /></div>
              <div className="col-md-6 mb-3"><input type="text" name="last_name" className="form-control" placeholder="Last Name" onChange={handleChange} required /></div>
            </div>
            <div className="mb-3"><input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required /></div>
            <div className="mb-3"><input type="date" name="date_of_birth" className="form-control" onChange={handleChange} required /></div>
            <div className="mb-3"><input type="text" name="phone" className="form-control" placeholder="Phone Number" onChange={handleChange} required /></div>
            <div className="mb-3"><textarea name="address" className="form-control" placeholder="Address" rows="2" onChange={handleChange} required /></div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Registering...' : 'Register as Student'}
            </button>
          </form>
          
          <div className="text-center mt-3">
            <Link to="/login">Already have an account? <strong>Login here</strong></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;