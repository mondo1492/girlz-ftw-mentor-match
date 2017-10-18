import React from 'react';

class UnapprovedMentors extends React.Component {
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
    let unapproved_mentors = [];
    nextProps.mentors.forEach(function(mentor) {
      console.log(mentor);
      if (!mentor.approved) {
        unapproved_mentors.push(mentor);
      }
    });
    this.setState( { mentors: unapproved_mentors } );
  }

  update() {
    this.forceUpdate();
  }

  approve(mentor_id) {
    console.log(mentor_id);
  }

  render() {
    const approve = this.approve;
    return(
      <div>
        <h1>Unapproved Mentor List</h1>
        <ul>
          {this.state.mentors.map(function(mentor){
            return <li key={mentor.id}>{mentor.first_name} {mentor.last_name}
              <button onClick={() => approve(mentor.id)}>Approve!</button>

              </li>;
            })}
        </ul>
        <button onClick={this.update}>meow</button>

      </div>
    );
  }
}

export default UnapprovedMentors;
