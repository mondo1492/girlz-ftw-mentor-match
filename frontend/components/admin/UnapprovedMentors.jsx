import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import MentorShow from './MentorShow';


class UnapprovedMentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: {},
      isModalOpen: false,
      mentor: null
    };
    this.openModal = this.openModal.bind(this);
    this.approve = this.approve.bind(this);
    this.reject = this.reject.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentors();
  }

  componentWillReceiveProps(nextProps) {
    let unapprovedMentors = [];
    nextProps.mentors.forEach(function(mentor) {
      if (mentor.approved === null) {
        unapprovedMentors[mentor.id] = mentor;
      }
    });
    this.setState( { mentors: unapprovedMentors } );
  }

  openModal(mentor) {
    this.setState({ isModalOpen: true, mentor: mentor });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  approve(mentor) {
    let newMentor = mentor;
    let newMentors = this.state.mentors;
    let id = newMentor.id;
    newMentor.approved = true;
    this.props.updateMentor(newMentor);
    delete newMentors[id];
    this.setState( { mentors: newMentors } );
  }

  reject(mentor) {
    let newMentor = mentor;
    let newMentors = this.state.mentors;
    let id = newMentor.id;
    newMentor.approved = false;
    this.props.updateMentor(newMentor);
    delete newMentors[id];
    this.setState( { mentors: newMentors } );
  }

  render() {
    const approve = this.approve;
    const reject = this.reject;
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <MentorShow mentor={this.state.mentor}/>
        </Modal>

        <h1>Unapproved Mentor List</h1>
        <ul>
          {Object.keys(this.state.mentors).map((key) => (
             <li key={key}>
              <span onClick={() => this.openModal(this.state.mentors[key])} >
                {this.state.mentors[key].first_name} {this.state.mentors[key].last_name}
              </span>
              <button onClick={() => approve(this.state.mentors[key])}>
                Approve!
              </button>
              <button onClick={() => reject(this.state.mentors[key])}>
                Reject!
              </button>
              </li>
            ))}
        </ul>

      </div>
    );
  }
}

export default UnapprovedMentors;
