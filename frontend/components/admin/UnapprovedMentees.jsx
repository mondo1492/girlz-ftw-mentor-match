import React from 'react';

class UnapprovedMentees extends React.Component {
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
    let unapproved_mentees = [];
    nextProps.mentees.forEach(function(mentee) {
      console.log(mentee);
      if (!mentee.approved) {
        unapproved_mentees.push(mentee);
      }
    });
    this.setState( { mentees: unapproved_mentees } );
  }

  update() {
    this.forceUpdate();
  }

  approve(mentee_id) {
    console.log(mentee_id);
  }

  render() {
    const approve = this.approve;
    return(
      <div>
        <h1>Unapproved Mentee List</h1>
        <ul>
          {this.state.mentees.map(function(mentee){
            return <li key={mentee.id}>{mentee.first_name} {mentee.last_name}
              <button onClick={() => approve(mentee.id)}>Approve!</button>

              </li>;
            })}
        </ul>
        <button onClick={this.update}>meow</button>

      </div>
    );
  }
}

export default UnapprovedMentees;
