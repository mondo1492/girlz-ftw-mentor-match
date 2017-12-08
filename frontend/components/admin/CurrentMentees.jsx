import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { Modal, Table, Button } from 'react-bootstrap';
import MenteeShow from './MenteeShow';
import MentorChangeView from './MentorChangeView';
import TierChangeView from './TierChangeView';


class CurrentMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: [],
      mentors: [],
      allMentors: [],
      currentMentor: null,
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
    console.log("PRRRRRROOOPS");
    let approvedMentees = [];
    let openMentors = [];
    let allMentors = [];

    nextProps.mentees.forEach(function(mentee) {
      if (mentee.approved) {
        approvedMentees.push(mentee);
      }
    });

    nextProps.mentors.forEach(function(mentor) {
      allMentors.push(mentor);
      if (mentor.approved && !mentor.status && mentor.mentee_count <= 0) {
        openMentors.push(mentor);
      }
    });

    this.setState( { mentees: approvedMentees, mentors: openMentors, allMentors: allMentors });
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

  updateWithSelectedMentor(previousMentor, newMentor) {
    if (previousMentor && newMentor) {
      this.props.updateMentor(previousMentor).then(()=> this.props.updateMentor(newMentor)).then(()=> this.props.fetchMentors());
    } else if (!previousMentor && newMentor) {
      this.props.updateMentor(newMentor).then(()=> this.props.fetchMentors());
    } else {
      this.props.updateMentor(previousMentor).then(()=> this.props.fetchMentors());
    }

    this.setState({isModalTwoOpen: false });
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
    // TODO: permit exiting tierchange modal by clicking out of modal
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>
        <div className='modal-container'>
          <Modal className='modal' show={this.state.isModalOpen} onHide={() => this.closeModal()} onExit={() => this.closeModal()}>
            <MenteeShow mentee={this.state.mentee}/>
          </Modal>

          <Modal className='modal' show={this.state.isModalTwoOpen} onHide={() => this.closeModal()} onExit={() => this.closeModal()}>
            <MentorChangeView allMentors={this.state.allMentors} closeModal={this.closeModal} updateMentee={this.props.updateMentee} updateWithSelectedMentor = {this.updateWithSelectedMentor} mentee={this.state.mentee} mentors={this.state.mentors}></MentorChangeView>
          </Modal>

          <Modal className='modal' show={this.state.isModalThreeOpen}>
            <TierChangeView closeModal={this.closeModal} updateMentee={this.props.updateMentee} updateStateWithNewTiers = {this.updateStateWithNewTiers} mentee={this.state.mentee}></TierChangeView>
          </Modal>
        </div>
        <h1>Approved Mentee List</h1>

        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tier</th>
              <th></th>
              <th>Current Mentor</th>
              <th></th>
              <th>Full Profile</th>
            </tr>
          </thead>

          <tbody>
            {this.state.mentees.map( (mentee) => (
              <tr key={mentee.id}>

                <td>
                  {mentee.first_name}&nbsp;{ mentee.last_name}
                </td>

                <td className="tier_number">
                  {mentee.tier}
                </td>
                <td>
                  <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={() => this.openModalThree(mentee)}>
                    Change Tier?
                  </Button>
                </td>

                <td>
                  {mentee.mentor_name === "" ? "No Mentor Yet" : mentee.mentor_name}
                </td>
                <td>
                  <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={() => this.openModalTwo(mentee)}>
                    { mentee.mentor_name === "" ? "Choose A Mentor?" : "Select A New Mentor?"}
                  </Button>
                </td>

                <td>
                  <span
                    className="generic_link"
                    onClick={() => this.openModal(mentee)}>
                    Full Profile
                  </span>
                </td>

              </tr>
            )).sort( (a,b) => {
              return a.props.children[1].props.children - b.props.children[1].props.children;
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CurrentMentees;
