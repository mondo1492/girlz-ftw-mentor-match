import React from 'react';
import MentorShow from './MentorShow';
import { Link } from 'react-router-dom';
import { Table, Modal } from 'react-bootstrap';


class CurrentMentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
      showModal: false,
      mentor: null
    };
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
    this.setState({ showModal: true, mentor: mentor });
  }

  closeModal() {
    this.setState({ showModal: false });
  }


  render() {
    // <div className="current_mentors_container">
    // </div>
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" show={this.state.showModal} onHide={() => this.closeModal()}>
          <MentorShow mentor={this.state.mentor}/>
        </Modal>

        <h1>Approved Mentor List</h1>

        <Table responsive striped hover>
          <thead>
            <tr>
              <th>Mentor</th>
              <th>Status</th>
              <th>Current Mentee</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mentors.map( (mentor) => (
              <tr className="current_mentors_list_item" key={mentor.id}>
                <td onClick={() => this.openModal(mentor)}>
                  {mentor.first_name}&nbsp;{mentor.last_name}  {}
                </td>
                <td>{mentor.status ? "Has a Mentee": "Seeking Mentee"}</td>
                <td>{mentor.mentee_names ? mentor.mentee_names : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default CurrentMentors;
