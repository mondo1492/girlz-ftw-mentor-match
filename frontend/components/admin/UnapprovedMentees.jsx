import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal'
import MenteeShow from './MenteeShow'


class UnapprovedMentees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: [],
      isModalOpen: false,
      mentee: null
    }
    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentees();
  }

  componentWillReceiveProps(nextProps) {
    let unapprovedMentees = {};
    nextProps.mentees.forEach(function(mentee) {
      if (!mentee.approved) {
        unapprovedMentees[mentee.id] = mentee;
        // unapproved_mentees.push(mentee);
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

  update() {
    this.forceUpdate();
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
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <MenteeShow mentee={this.state.mentee}/>
        </Modal>


        <h1>Unapproved Mentee List</h1>
        <ul>
          {this.state.mentees.map( (mentee) => {
            return <li key={mentee.id}> <span onClick={() => this.openModal(mentee)} >{mentee.first_name} {mentee.last_name}</span> <button onClick={() => approve(mentee.id)}>Approve!</button></li>;
            })}
        </ul>

      </div>
    );
  }
}

export default UnapprovedMentees;
