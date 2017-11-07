import React from 'react';
import { Link } from 'react-router-dom';
import MenteeShow from './MenteeShow';
import { Button, Modal, Table } from 'react-bootstrap';

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
          show={this.state.isModalOpen}
          onHide={() => this.closeModal()}
          dialogClassName="modal-overlay">
          <MenteeShow mentee={this.state.mentee}/>
        </Modal>

        <h1>Unranked Mentee List</h1>

        <Table responsive>
          <thead>
            <tr>
              <th>Video</th>
              <th>Name</th>
              <th>Show Full Profile</th>
              <th>Rank Mentee</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.mentees).map((key) => (
              <tr key={key} className="unapproved_box_container">

                  <td>Video Placeholder</td>

                  <td>{this.state.mentees[key].first_name} {this.state.mentees[key].last_name}</td>
                  <td>
                    <span className="generic_link" onClick={() => this.openModal(this.state.mentees[key])}>
                      Full Profile
                    </span>
                  </td>
                  <td>
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
                      :
                      <Button disabled>
                        Set Tier!
                      </Button>
                    }
                  </td>


              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default UnapprovedMentees;
