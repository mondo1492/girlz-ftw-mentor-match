import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Logout from './logout/LogoutContainer';


const AdminPanel = () => (
  <div className="admin_panel_container">
    <header>
      <h1>Admin Panel</h1>
    </header>
    <div className="admin_panel_actions">
      <div>
        <h3>Mentor Actions</h3>
        <Link to="/current_mentors">View All Approved Mentors</Link>
        <Link to="/unapproved_mentors">View Submitted Mentor Applications</Link>
        <Link to="/rejected_mentors">View Rejected Mentors</Link>
      </div>
      <div>
        <h3>Mentee Actions</h3>
        <Link to="/current_mentees">View All Approved Mentees</Link>
        <Link to="/unapproved_mentees">View Submitted Mentee Applications</Link>
        <Link to="/rejected_mentees">View Rejected Mentees</Link>
      </div>
      <div>
        <h3>Admin Actions</h3>
        <button>Generate Matches</button>
        <Logout />
      </div>
    </div>
  </div>
);

export default AdminPanel;
