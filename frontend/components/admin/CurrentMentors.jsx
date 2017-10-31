import React from 'react';
import Modal from '../Modal'
import MentorShow from './MentorShow'
import { Link } from 'react-router-dom';


class CurrentMentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
      isModalOpen: false,
      mentor: null
    }
    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentors();
  }

  componentWillReceiveProps(nextProps) {
    let approved_mentors = [];
    nextProps.mentors.forEach(function(mentor) {
      if (mentor.approved) {
        approved_mentors.push(mentor);
      }
    });
    this.setState( { mentors: approved_mentors } );
  }

  update() {
    this.forceUpdate();
  }

  openModal(mentor) {
    this.setState({ isModalOpen: true, mentor: mentor });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }


  render() {
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <MentorShow mentor={this.state.mentor}/>
        </Modal>

        <h1>Current Mentor List</h1>
        <ul>
          {this.state.mentors.map( (mentor) => (
            <li key={mentor.id}>
              <span onClick={() => this.openModal(mentor)}>
                {mentor.first_name} {mentor.last_name}  {}
              </span>
              - Mentees: {mentor.mentee_names}
            </li>
            ))}
        </ul>

      </div>
    );
  }
}

export default CurrentMentors;
