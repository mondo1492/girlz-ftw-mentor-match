import React from 'react';
import { Route, Link } from 'react-router-dom';
import SessionContainer from './session/session_forms_container';

const Landing = () => (
  <div>
    <div id="all-content">
      <h4>Mentor Sign In</h4>
      <SessionContainer/>
    </div>
  </div>
);

export default Landing;
