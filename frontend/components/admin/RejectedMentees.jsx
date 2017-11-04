import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import MenteeShow from './MenteeShow';

class RejectedMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: {},
      isModalOpen: false,
      mentee: null
    };
    this.openModal = this.openModal.bind(this);
    this.approve = this.approve.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
  }

  componentWillReceiveProps(nextProps) {
    let rejectedMentees = {};
    nextProps.mentees.forEach(function(mentee) {
      if (mentee.tier === 4) {
        rejectedMentees[mentee.id] = mentee;
      }
    });
    this.setState( { mentees: rejectedMentees } );
  }

  openModal(mentee) {
    this.setState({ isModalOpen: true, mentee: mentee });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
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

        <h1>Rejected Mentee List</h1>
        <ul>
          {Object.keys(this.state.mentees).map((key) => (
             <li key={key}>
              <span onClick={() => this.openModal(this.state.mentees[key])} >
                {this.state.mentees[key].first_name} {this.state.mentees[key].last_name}
              </span>

              <select
                onChange={(e) => {this.handleChange(e, this.state.mentees[key]);}}
              >
                <option value='' hidden> -- select an option --</option>
                <option value='1'>1 - Amazing</option>
                <option value='2'>2 - Pretty good</option>
                <option value='3'>3 - We'll see</option>
              </select>

              {this.state.mentees[key].tier !== 4 ?
                <button onClick={() => approve(this.state.mentees[key])}>
                  Unreject & Set Tier!
                </button>
                : ""
              }

              </li>
            ))}
        </ul>

      </div>
    );
  }
}

export default RejectedMentees;