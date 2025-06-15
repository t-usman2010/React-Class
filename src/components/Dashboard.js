import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const formatJoinDate = (date) => {
    if (!date) return 'Unknown';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-header">
        <h2>Welcome to your Dashboard</h2>
        <button onClick={handleLogout} className="btn btn-outline logout-btn">
          Sign Out
        </button>
      </div>

      <div className="user-info-card">
        <div className="user-avatar">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">
              {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 
               user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
            </div>
          )}
        </div>
        
        <div className="user-details">
          <h3 className="user-name">
            {user?.displayName || 'User'}
          </h3>
          <p className="user-email">{user?.email}</p>
          <div className="user-meta">
            <div className="meta-item">
              <span className="meta-label">Member since:</span>
              <span className="meta-value">{formatJoinDate(user?.metadata?.creationTime)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Last sign in:</span>
              <span className="meta-value">{formatJoinDate(user?.metadata?.lastSignInTime)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Email verified:</span>
              <span className={`meta-value ${user?.emailVerified ? 'verified' : 'unverified'}`}>
                {user?.emailVerified ? 'Yes ✓' : 'No ✗'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h3>🎓 Student Portal</h3>
          <p>Welcome to the Islamabad College for Boys G-6/3 student portal. Here you can access your academic information, course materials, and more.</p>
        </div>

        <div className="quick-actions">
          <h4>Quick Actions</h4>
          <div className="action-grid">
            <div className="action-card">
              <div className="action-icon">📚</div>
              <h5>My Courses</h5>
              <p>View enrolled courses and materials</p>
            </div>
            <div className="action-card">
              <div className="action-icon">📝</div>
              <h5>Assignments</h5>
              <p>Check pending assignments</p>
            </div>
            <div className="action-card">
              <div className="action-icon">📊</div>
              <h5>Grades</h5>
              <p>View your academic progress</p>
            </div>
            <div className="action-card">
              <div className="action-icon">📅</div>
              <h5>Schedule</h5>
              <p>Check your class timetable</p>
            </div>
          </div>
        </div>

        <div className="announcements">
          <h4>📢 Recent Announcements</h4>
          <div className="announcement-list">
            <div className="announcement-item">
              <div className="announcement-date">Today</div>
              <div className="announcement-content">
                <h5>Welcome to the new academic year!</h5>
                <p>We're excited to have you back. Please check your course schedules.</p>
              </div>
            </div>
            <div className="announcement-item">
              <div className="announcement-date">2 days ago</div>
              <div className="announcement-content">
                <h5>Library hours extended</h5>
                <p>The library will now be open until 9 PM on weekdays.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;