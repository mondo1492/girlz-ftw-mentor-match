import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import MenteeShow from './MenteeShow';

class UnapprovedMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: {},
      isModalOpen: false,
      mentee: null
    };
    this.openModal = this.openModal.bind(this);
    this.approve = this.approve.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
  }

  componentWillReceiveProps(nextProps) {
    let unapprovedMentees = {};
    nextProps.mentees.forEach(function(mentee) {
      if (!mentee.approved) {
        unapprovedMentees[mentee.id] = mentee;
      }
    });
    this.setState( { mentees: unapprovedMentees } );
  }

  openModal(mentee) {
    this.setState({ isModalOpen: true, mentee: mentee });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  approve(mentee) {
    let newMentee = mentee;
    let newMentees = this.state.mentees;
    let id = newMentee.id;
    newMentee.approved = true;
    this.props.updateMentee(newMentee);
    delete newMentees[id];
    this.setState( { mentees: newMentees } );
  }

  render() {
    const approve = this.approve;
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <MenteeShow mentee={this.state.mentee}/>
        </Modal>

        <h1>Unapproved Mentee List</h1>
        <ul>
          {Object.keys(this.state.mentees).map((key) => (
             <li key={key}>
              <span onClick={() => this.openModal(this.state.mentees[key])} >
                {this.state.mentees[key].first_name} {this.state.mentees[key].last_name}
              </span>
              <button onClick={() => approve(this.state.mentees[key])}>
                Approve!
              </button>
              </li>
            ))}
        </ul>

      </div>
    );
  }
}

export default UnapprovedMentees;
