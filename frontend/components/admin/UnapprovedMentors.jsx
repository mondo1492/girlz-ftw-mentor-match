import React from 'react';
import { Link } from 'react-router-dom';
import MentorShow from './MentorShow';
import { Modal, Table, Button } from 'react-bootstrap';


class UnapprovedMentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: {},
      isModalOpen: false,
      mentor: null
    };
    this.openModal = this.openModal.bind(this);
    this.approve = this.approve.bind(this);
    this.reject = this.reject.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentors();
  }

  componentWillReceiveProps(nextProps) {
    let unapprovedMentors = [];
    nextProps.mentors.forEach(function(mentor) {
      if (mentor.approved === null) {
        unapprovedMentors[mentor.id] = mentor;
      }
    });
    this.setState( { mentors: unapprovedMentors } );
  }

  openModal(mentor) {
    this.setState({ isModalOpen: true, mentor: mentor });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  approve(mentor) {
    let newMentor = mentor;
    let newMentors = this.state.mentors;
    let id = newMentor.id;
    newMentor.approved = true;
    this.props.updateMentor(newMentor);
    delete newMentors[id];
    this.setState( { mentors: newMentors } );
  }

  reject(mentor) {
    let newMentor = mentor;
    let newMentors = this.state.mentors;
    let id = newMentor.id;
    newMentor.approved = false;
    this.props.updateMentor(newMentor);
    delete newMentors[id];
    this.setState( { mentors: newMentors } );
  }

  render() {
    const approve = this.approve;
    const reject = this.reject;
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" show={this.state.isModalOpen} onHide={() => this.closeModal()}>
          <MentorShow mentor={this.state.mentor}/>
        </Modal>

        <h1>Unapproved Mentor List</h1>
        <Table responsive striped>
          <tbody>
            {Object.keys(this.state.mentors).map((key) => (
              <tr className="unapproved_box_container" key={key}>
                <td>
                  <span onClick={() => this.openModal(this.state.mentors[key])} >
                    {this.state.mentors[key].first_name} {this.state.mentors[key].last_name}
                  </span>
                  <Button bsStyle="success" onClick={() => approve(this.state.mentors[key])}>
                    Approve!
                  </Button>
                  <Button bsStyle="danger" onClick={() => reject(this.state.mentors[key])}>
                    Reject!
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default UnapprovedMentors;
