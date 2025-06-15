import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (error) {
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No account found with this email address';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/too-many-requests':
        return 'Too many requests. Please try again later';
      default:
        return 'Failed to send reset email. Please try again';
    }
  };

  return (
    <div className="auth-container fade-in">
      <h2 className="auth-title">Reset Password</h2>
      <p className="auth-subtitle">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      {error && (
        <div className="error-message fade-in">
          {error}
        </div>
      )}

      {message && (
        <div className="success-message fade-in">
          {message}
        </div>
      )}

      <form onSubmit={handleResetPassword} className="auth-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Email'}
        </button>
      </form>

      <div className="auth-links">
        <Link to="/login" className="link">
          ← Back to Login
        </Link>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;