import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Table } from 'react-bootstrap';
import PotentialMenteeShow from './PotentialMenteeShow.jsx';
import Logout from '../logout/LogoutContainer';

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

  componentWillMount() {
    this.props.fetchMentor(this.props.currentUser.id);
  }

  render() {
    const mentor = this.props.mentor.length > 0 ? this.props.mentor[0] : this.props.currentUser;
    const mentees = mentor.mentees || [];

    const selectOrShowMentees = () => {
      if (mentees.length === 0 ) {
        return (
          <Link to='mentor_panel/mentee_selection'>
            <h2>Mentee Selection Page</h2>
          </Link>
        )
      } else {
        return (
          <div>
            <h3>Your Mentees</h3>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Full Profile</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(mentees).map((key) => (
                  <tr key={key}>
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
        )
      }
    };

    return(
      <div>
        <header className='mentor-panel-header'>
        </header>
        <h1>Mentor Panel</h1>
        {<h2>Hi {mentor.first_name}!</h2>}
        <Logout />

        <Modal className="modal" show={this.state.isModalOpen} onHide={() => this.closeModal()}>
          <PotentialMenteeShow mentee={this.state.mentee}/>
        </Modal>

        {selectOrShowMentees() }
      </div>
    );
  }
}

export default MentorPanel;
