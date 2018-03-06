import React from 'react';
import {Link} from 'react-router-dom';
import { Modal, Button, Table } from 'react-bootstrap';
import MenteeShow from '../admin/MenteeShow.jsx';

class MentorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.openModal = this.openModal.bind(this);
  }

  openModal(mentee) {
    this.setState({ isModalOpen: true, mentee: mentee });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const mentor = this.props.currentUser;
    const mentees = this.props.mentees;

    return(
      <div>
        <h1>Mentor Panel</h1>

        <Link to='mentor_panel/mentee_selection'>Mentee Selection Page</Link>

        <Modal className="modal" show={this.state.isModalOpen} onHide={() => this.closeModal()}>
          <MenteeShow mentee={this.state.mentee}/>
        </Modal>

        <h3>Your Mentees</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>Video</th>
              <th>Name</th>
              <th>Full Profile</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(mentees).map((key) => (
              <tr key={key}>
                <td>Video placeholder ayyyy</td>

                <td>
                  {mentees[key].first_name} {mentees[key].last_name}
                </td>

                <td>
                  <span className="generic_link" onClick={() => this.openModal(mentees[key])} >
                    Full Profile
                  </span>
                </td>

              </tr>
              ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default MentorPanel;
