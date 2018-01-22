import React from 'react';
import {Link} from 'react-router-dom';

class MentorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  

  render() {
    return(
      <div>
        <h1>Mentor Panel</h1>

        <p>You are an approved mentor!</p>

        <Link to="mentor_panel/update">Update Your Info</Link>

      </div>
    );
  }
}

export default MentorPanel;
