import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
import Modal from '../Modal';
import MenteeShow from './MenteeShow';


class CurrentMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: [],
      mentors: [],
      isModalOpen: false,
      mentee: null,
      showDialog: false
    };

    this.openModal = this.openModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
    this.props.fetchMentors();
  }

  componentWillReceiveProps(nextProps) {
    let approved_mentees = [];
    let open_mentors = [];
    nextProps.mentees.forEach(function(mentee) {
      if (mentee.approved) {
        approved_mentees.push(mentee);
      }
    });
    if (nextProps.mentors) {
      nextProps.mentors.forEach(function(mentor) {
        if (mentor.approved && !mentor.status) {
          open_mentors.push(mentor);
        }
      });
    }
    this.setState( { mentees: approved_mentees, mentors: open_mentors });
  }

  openModal(mentee) {
    this.setState({ isModalOpen: true, mentee: mentee });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleChange(e, mentee) {
    console.log("im trying to update");
    console.log(mentee);
    console.log(e.target);
    let newMentee = mentee;
    let newMentees = this.state.mentees;
    let idx = newMentees.findIndex(oldMentee => oldMentee.id === mentee.id);
    let mentor_id = parseInt(e.target.value);
    mentee.mentor_id = mentor_id;
    let newMentor = this.state.mentors.find(mentor => mentor.id === mentor_id);
    // how can we add this mentee to the mentor's list of mentees? line below?
    // newMentor.mentees.push(mentee);
    this.props.updateMentee(newMentee);
    // this update doesn't work - check the rails server
    // however, it DOES update state
    newMentees[idx] = newMentee;
    this.setState( { mentees: newMentees},
    () => console.log(this.state));
  }

  render() {
    const mentorOptionList = this.state.mentors.map(mentor => (
        <option value={`${mentor.id}`}
            key={mentor.id}>{mentor.first_name} {mentor.last_name}</option>
      ));

    const mentorSelect = (mentee) => (
      <select
        value={mentee.mentor_id}
        onChange={(e) => {
          if (confirm('Match this mentee to this mentor?')) {
            this.handleChange(e, mentee);
          } else {
            console.log("im here", e.target.value);
          }

          // confirmAlert({
          //   title: 'Confirm to submit',
          //   message: 'Match this mentee to this mentor?',
          //   confirmLabel: 'Confirm',
          //   cancelLabel: 'Cancel',
          //   onConfirm: (e) => {this.handleChange(e, mentee)},
          //   onCancel: () => console.log("cancelled")
          // })
        }}
      >
      <option value='' hidden> -- select a mentor --</option>
      {mentorOptionList}
      </select>
    );

    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <MenteeShow mentee={this.state.mentee}/>
        </Modal>

        <h1>Approved Mentee List</h1>
        <ul>
          {this.state.mentees.map( (mentee) => (
            <li key={mentee.id}>
              <span onClick={() => this.openModal(mentee)}>
                {mentee.first_name} {mentee.last_name} {}
              </span>
              - Mentor: {mentorSelect(mentee)} {}
              - Tier: {mentee.tier}
            </li>
          )).sort( (a,b) => {
            return a.props.children[5] - b.props.children[5];
            })
          }
        </ul>

      </div>
    );
  }
}

export default CurrentMentees;
