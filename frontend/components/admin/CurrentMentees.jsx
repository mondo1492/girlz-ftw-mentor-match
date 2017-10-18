import React from 'react';
// import { withRouter } from 'react-router-dom';

class CurrentMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: []
    }
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
  }

  componentWillReceiveProps(nextProps) {
    this.setState( { mentees: nextProps.mentees } );
  }

  update() {
    this.forceUpdate();
  }

  render() {
    return(
      <div>
        <h1>Current Mentee List</h1>
        <ul>
          {this.state.mentees.map(function(mentee){
            return <li key={mentee.id}>{mentee.first_name} {mentee.last_name}</li>;
            })}
        </ul>
        <button onClick={this.update}>meow</button>

      </div>
    );
  }
}

export default CurrentMentees;
