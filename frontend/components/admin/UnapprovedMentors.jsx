import React from 'react';

class UnapprovedMentors extends React.Component {
  render() {
    return(
      <div>
        <h1>Unapproved Mentor List</h1>
        <ul>
          {this.props.mentors.map(function(mentor){
            return <li>{mentor}</li>;
          })}
        </ul>
        </ul>

      </div>
    );
  }
}

export default UnapprovedMentors;
