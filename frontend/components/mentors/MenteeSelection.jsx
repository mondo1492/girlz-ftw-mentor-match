import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Modal } from 'react-bootstrap';
import values from "lodash/values";
import PotentialMenteeShow from './PotentialMenteeShow.jsx';


class MenteeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potentialMentees: [],
      showModal: false,
      modalMentee: null

    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalMentee) {
    this.setState({ showModal: true, modalMentee: modalMentee });
  }

  closeModal() {
    this.setState({ showModal: false });
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
    const menteeSelectionH2 = <h2>Mentee Selection</h2>;

    return(
      <div>
        <Link to="/mentor_panel">Back to Mentor Panel</Link>

        <Modal className="modal" show={this.state.showModal} onHide={() => this.closeModal()}>
          <PotentialMenteeShow mentee={this.state.modalMentee}/>
        </Modal>

        <Table responsive striped hover>
          <thead>
            <tr>
              <th>Mentee</th>
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
                  <button
                    onClick={this.acceptMentee}
                    >
                    Select this Mentee!
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    )
  }
}

export default MenteeSelection;
