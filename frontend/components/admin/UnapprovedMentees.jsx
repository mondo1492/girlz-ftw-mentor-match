import React from 'react';

class UnapprovedMentees extends React.Component {
  render() {
    return(
      <div>
        <h1>Unapproved Mentee List</h1>
        <ul>
          {this.props.mentees.map(function(mentee){
            return <li>{mentee}</li>;
          })}
        </ul>

      </div>
    );
  }
}

export default UnapprovedMentees;
