import React from 'react';
import merge from 'lodash/merge';

class UnapprovedMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: {}
    };
    // this.update = this.update.bind(this);
    this.approve = this.approve.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
  }

  componentWillReceiveProps(nextProps) {
    let unapprovedMentees = {};
    nextProps.mentees.forEach(function(mentee) {
      console.log(mentee);
      if (!mentee.approved) {
        unapprovedMentees[mentee.id] = mentee;
        // unapproved_mentees.push(mentee);
      }
    });
    this.setState( { mentees: unapprovedMentees } );
  }

  componentWillUpdate() {

  }

  approve(mentee) {
    let newMentee = mentee;
    let newMentees = this.state.mentees;
    let id = newMentee.id;
    newMentee.approved = true;
    //api call here
    this.props.updateMentee(newMentee);

    delete newMentees[id];
    this.setState( { mentees: newMentees } );
  }

  render() {
    const approve = this.approve;
    return(
      <div>
        <h1>Unapproved Mentee List</h1>
        <ul>
          {Object.keys(this.state.mentees).map((key) => {
            return <li key={key}>{this.state.mentees[key].first_name} {this.state.mentees[key].last_name}
              <button onClick={() => approve(this.state.mentees[key])}>Approve!</button>

              </li>;
            })}
        </ul>
        <button onClick={this.update}>meow</button>

      </div>
    );
  }
}

export default UnapprovedMentees;
