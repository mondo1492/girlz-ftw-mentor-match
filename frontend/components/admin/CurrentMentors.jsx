import React from 'react';

class CurrentMentors extends React.Component {
  render() {
    return(
      <div>
        <h1>Current Mentor List</h1>
        <ul>
          {this.props.mentees.map(function(mentee){
            return <li>{mentee}</li>;
          })}
        </ul>

      </div>
    );
  }
}

export default CurrentMentors;
