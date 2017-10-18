import React from 'react';

class CurrentMentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: []
    }
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentors();
  }

  componentWillReceiveProps(nextProps) {
    this.setState( { mentors: nextProps.mentors } );
  }

  update() {
    this.forceUpdate();
  }

  render() {
    return(
      <div>
        <h1>Current Mentor List</h1>
        <ul>
          {this.state.mentors.map(function(mentor){
            return <li key={mentor.id}>{mentor.first_name} {mentor.last_name}</li>;
            })}
        </ul>
        <button onClick={this.update}>meow</button>

      </div>
    );
  }
}

export default CurrentMentors;
