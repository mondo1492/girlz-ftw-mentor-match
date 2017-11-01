import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import Modal from '../Modal';
import MenteeShow from './MenteeShow';
import MentorChangeView from './MentorChangeView';
import TierChangeView from './TierChangeView';


class CurrentMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: [],
      mentors: [],
      isModalOpen: false,
      isModalTwoOpen: false,
      isModalThreeOpen: false,
      mentee: null,
      showDialog: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateWithSelectedMentor = this.updateWithSelectedMentor.bind(this);
    this.updateStateWithNewTiers = this.updateStateWithNewTiers.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
    this.props.fetchMentors();
  }

  componentWillReceiveProps(nextProps) {
    let approvedMentees = [];
    let openMentors = [];

    nextProps.mentees.forEach(function(mentee) {
      if (mentee.approved) {
        approvedMentees.push(mentee);
      }
    });

    nextProps.mentors.forEach(function(mentor) {
      if (mentor.approved && !mentor.status && mentor.mentee_count <= 0) {
        openMentors.push(mentor);
      }
    });

    this.setState( { mentees: approvedMentees, mentors: openMentors });
  }

  openModal(mentee) {
    this.setState({ isModalOpen: true, mentee: mentee });
  }

  openModalTwo(mentee) {
    this.setState({ isModalTwoOpen: true, mentee: mentee});
  }

  openModalThree(mentee) {
    this.setState({ isModalThreeOpen: true, mentee: mentee});
  }

  closeModal() {
    this.setState({ isModalOpen: false, isModalTwoOpen: false, isModalThreeOpen: false });
  }

  updateWithSelectedMentor() {
    this.props.fetchMentors();
    this.setState( {isModalTwoOpen: false });
  }

  updateStateWithNewTiers(newMentee) {
    let newMentees = [];
    this.state.mentees.forEach((mentee) => {
      if (newMentee.id === mentee.id) {
        newMentees.push(newMentee);
      } else {
        newMentees.push(mentee);
      }
    });
    this.props.fetchMentors();
    this.setState( { mentees: newMentees });
  }

  render() {
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <MenteeShow mentee={this.state.mentee}/>
        </Modal>

        <Modal className="modal" isOpen={this.state.isModalTwoOpen} onClose={() => this.closeModal()}>
          <MentorChangeView closeModal={this.closeModal} updateMentee={this.props.updateMentee} updateWithSelectedMentor = {this.updateWithSelectedMentor} mentee={this.state.mentee} mentors={this.state.mentors}></MentorChangeView>
        </Modal>

        <Modal className="modal" isOpen={this.state.isModalThreeOpen}>
          <TierChangeView closeModal={this.closeModal} updateMentee={this.props.updateMentee} updateStateWithNewTiers = {this.updateStateWithNewTiers} mentee={this.state.mentee}></TierChangeView>
        </Modal>

        <h1>Approved Mentee List</h1>
        <div className="current_mentees_container">
          <ul>
            <div className="current_mentees_list_item"
              key={0}>
              <h4>Mentee</h4>
              <h4>Tier</h4>
              <h4>Current Mentor</h4>
            </div>
            {this.state.mentees.map( (mentee) => (
              <div className="current_mentees_list_item" key={mentee.id}>
                <span onClick={() => this.openModal(mentee)}>
                  {mentee.first_name}&nbsp;{ mentee.last_name}
                </span>
                <div className="mentor_mentor_select">
                  <h4>{mentee.tier}</h4>
                    <button onClick={() => this.openModalThree(mentee)}>
                      Change Tier?
                    </button>
                </div>

                <div className="mentor_mentor_select">
                  <h4>{mentee.mentor_name === "" ? "No Mentor Yet" : mentee.mentor_name}</h4>
                  <button onClick={() => this.openModalTwo(mentee)}>
                    { mentee.mentor_name === "" ? "Choose A Mentor?" : "Select A New Mentor?"}
                  </button>
                </div>
              </div>
            )).sort( (a,b) => {
              return a.props.children[5] - b.props.children[5];
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default CurrentMentees;
