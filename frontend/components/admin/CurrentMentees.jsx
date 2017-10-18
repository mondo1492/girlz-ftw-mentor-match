import React from 'react';

class CurrentMentees extends React.Component {
  render() {
    return(
      <div>
        <h1>Current Mentee List</h1>
        <ul>
          {this.props.mentors.map(function(mentor){
            return <li>{mentor}</li>;
          })}
        </ul>

      </div>
    );
  }
}

export default CurrentMentees;
