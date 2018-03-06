import React from 'react';
import { Link } from 'react-router-dom';

class MenteeSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menteeSelectionH2 = <h2>Mentee Selection</h2>;
    const menteeInfo = <p>placeholder for mentee's info</p>;

    return(
      <div>
        <Link to="/mentor_panel">Back to Mentor Panel</Link>
        { true ? menteeSelectionH2 : menteeInfo }

      </div>
    )
  }
}

export default MenteeSelection;
