import React from 'react';
import {Link} from 'react-router-dom';

class MentorApp extends React.Component {
  render() {
    return(
      <div>
        <h1>Mentor Panel</h1>

        <p>You are an approved mentor!</p>

        <Link to="mentor_update">Update Your Info</Link>

      </div>
    );
  }
}

export default MentorApp;
