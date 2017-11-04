import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import MenteeShow from './MenteeShow';
import { Button } from 'react-bootstrap';
class UnapprovedMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: {},
      isModalOpen: false,
      mentee: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.approve = this.approve.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
  }

  componentWillReceiveProps(nextProps) {
    let unapprovedMentees = {};
    nextProps.mentees.forEach(function(mentee) {
      if (mentee.tier === null) {
        unapprovedMentees[mentee.id] = mentee;
      }
    });
    this.setState( { mentees: unapprovedMentees } );
  }

  openModal(mentee) {
    this.setState({ isModalOpen: true, mentee: mentee});
  }

  closeModal() {
    this.setState({ isModalOpen: false});
  }

  handleChange(e, mentee) {
    let newMentee = mentee;
    let newMentees = this.state.mentees;
    let id = newMentee.id;
    newMentee.tier = parseInt(e.target.value);
    newMentees[id] = newMentee;
    this.setState({ mentees: newMentees}, () => {
    });
  }

  approve(mentee) {
    let newMentee = mentee;
    let newMentees = this.state.mentees;
    let id = newMentee.id;
    newMentee.tier = mentee.tier;
    if (mentee.tier > 0 && mentee.tier < 4) {
      newMentee.approved = true;
    } else if (mentee.tier === 4) {
      newMentee.approved = false;
    }
    this.props.updateMentee(newMentee);
    delete newMentees[id];
    this.setState( { mentees: newMentees } );
  }

  render() {
    const approve = this.approve;
    return(
      <div className="unapproved_container">
        <Link to='admin_panel'>Back to Admin Panel</Link>
        <Modal
          className="modal"
          isOpen={this.state.isModalOpen}
          onRequestClose={() => this.closeModal()}
          overlayClassName="modal-overlay">
          <MenteeShow mentee={this.state.mentee}/>
        </Modal>

        <h1>Unranked Mentee List</h1>
        <ul>
          {Object.keys(this.state.mentees).map((key) => (
            <div key={key} className="unapproved_box_container">
              <div className="unapproved_box_left">
                <p>Video Placeholder</p>
              </div>
              <div className="unapproved_box_right">
                <h3>Name: {this.state.mentees[key].first_name} {this.state.mentees[key].last_name}</h3>
                <h3>City: {this.state.mentees[key].city}</h3>
                <span onClick={() => this.openModal(this.state.mentees[key])}>
                  <h3>See Full Profile</h3>
                </span>
                <select
                  onChange={(e) => {this.handleChange(e, this.state.mentees[key]);}}
                >
                  <option value='' hidden> -- select an option --</option>
                  <option value='1'>1 - Amazing</option>
                  <option value='2'>2 - Pretty good</option>
                  <option value='3'>3 - We'll see</option>
                  <option value='4'>4 - rejected</option>
                </select>
                {this.state.mentees[key].tier !== null ?
                  <Button onClick={() => approve(this.state.mentees[key])}>
                    Set Tier!
                  </Button>
                  : ""
                }
              </div>
            </div>
            ))}
        </ul>

      </div>
    );
  }
}

export default UnapprovedMentees;
