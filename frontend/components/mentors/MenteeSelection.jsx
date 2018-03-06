import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Table, Modal, Alert, Button } from 'react-bootstrap';
import values from "lodash/values";
import PotentialMenteeShow from './PotentialMenteeShow.jsx';


class MenteeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potentialMentees: [],
      showModal: false,
      modalMentee: null,
      showalert: false,
      alertMentee: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openAlert = this.openAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.selectMentee = this.selectMentee.bind(this);
  }

  closeAlert() {
    this.setState({ showAlert: false });
  }

  openAlert(alertMentee) {
    this.setState({ showAlert: true, alertMentee });
  }

  openModal(modalMentee) {
    this.setState({ showModal: true, modalMentee });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  selectMentee(mentee) {
    const menteeToUpdate = mentee;
    menteeToUpdate.user_id = this.props.currentUser.id;

    // to avoid unpermitted params error
    delete menteeToUpdate.match_percent;
    delete menteeToUpdate.mentor_name;

    this.props.updateMentee(menteeToUpdate)
      .then(res => {
        this.props.fetchMentor(this.props.currentUser.id);
      },
        error => console.log(error)
      ).then(res => this.props.history.push('/mentor_panel'));
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: `./api/matches/index/${this.props.currentUser.id}`
    })
    .then(res => {
      let potentialMentees = values(res)
      .sort((a,b) => b.match_percent - a.match_percent)
      .slice(0,5)

      this.setState({ potentialMentees });
    });
  }

  render() {
    const { alertMentee } = this.state;

    const alert = () => {
      if (this.state.showAlert) {
        return (
          <Alert bsStyle="danger" onDismiss={this.closeAlert}>
            <h2>
              Are you sure you want to select {alertMentee.first_name}?
            </h2>

            <Button onClick={() => this.selectMentee(alertMentee)} bsStyle="success">
              Yes!
            </Button>
            <span> or </span>
            <Button style={{ width: 'fit-content' }} onClick={this.closeAlert} bsStyle="danger">
              Let me reconsider.
            </Button>

          </Alert>
        )
      }
    };

    return(
      <div>
        <Link to="/mentor_panel">Back to Mentor Panel</Link>

        <Modal className="modal" show={this.state.showModal} onHide={() => this.closeModal()}>
          <PotentialMenteeShow mentee={this.state.modalMentee}/>
        </Modal>

        <h2>Mentee Selection</h2>

        <Table responsive striped hover>
          <thead>
            <tr>
              <th>Potential Mentees</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.potentialMentees.map( (mentee) => (
              <tr className="current_mentors_list_item" key={mentee.id}>

                <td>
                  {mentee.first_name}&nbsp;{mentee.last_name}  {}
                </td>

                <td
                  className="generic_link"
                  onClick={() => this.openModal(mentee)}>
                  Full Profile
                </td>

                <td>
                  <Button
                    onClick={() => this.openAlert(mentee)}
                    bsStyle="primary"
                    style={{ width: 'fit-content' }}
                  >
                    Select this Mentee!
                  </Button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>

        { alert() }
      </div>
    )
  }
}

export default MenteeSelection;
