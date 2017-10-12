import React from 'react';
import { Route, Link } from 'react-router-dom';
import SessionContainer from './session/session_forms_container';

const Landing = () => (
  <div>
    <div id="all-content">
      <Link to="/mentee_app">Mentee App</Link>
      <Link to="/mentor_app">Mentor App</Link>
      <SessionContainer/>
    </div>
  </div>
);

export default Landing;
