import React from 'react';
// import { withRouter } from 'react-router-dom';
import Modal from '../Modal'
import MentorShow from './MentorShow'


class UnapprovedMentors extends React.Component {
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
    let unapproved_mentors = [];
    nextProps.mentors.forEach(function(mentor) {
      if (!mentor.approved) {
        unapproved_mentors.push(mentor);
      }
    });
    this.setState( { mentors: unapproved_mentors } );
  }

  openModal(mentor) {
    this.setState({ isModalOpen: true, mentor: mentor });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
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
        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <MentorShow mentor={this.state.mentor}/>
        </Modal>


        <h1>Unapproved Mentor List</h1>
        <ul>
          {this.state.mentors.map( (mentor) => {
            return <li> <span onClick={() => this.openModal(mentor)} key={mentor.id}>{mentor.first_name} {mentor.last_name}</span> <button onClick={() => approve(mentor.id)}>Approve!</button></li>;
            })}
        </ul>

      </div>
    );
  }
}

export default UnapprovedMentors;
