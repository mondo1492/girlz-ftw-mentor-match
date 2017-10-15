import React from 'react';
import { Link } from 'react-router-dom';


const AdminPanel = () => (
  <div>
    <header>
      <h1>Admin Panel</h1>
    </header>

    <button>Launch Applications</button>
    <br/>
    <button>Generate Matches</button>
    <br/>

    <Link to="/current_mentors">View All Mentors</Link>
    <br/>
    <Link to="/current_mentees">View All Mentees</Link>
    <br/>
    <Link to="/unapproved_mentees">View Submitted Mentee Applications</Link>
    <br/>
    <Link to="/unapproved_mentors">View Submitted Mentor Applications</Link>
  </div>
);

export default AdminPanel;
