import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Table } from 'react-bootstrap';
import MentorShow from './MentorShow';


class RejectedMentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: {},
      isModalOpen: false,
      mentor: null
    };
    this.openModal = this.openModal.bind(this);
    this.approve = this.approve.bind(this);
  }

  componentWillMount() {
    this.props.fetchMentors();
  }

  componentWillReceiveProps(nextProps) {
    let rejectedMentors = [];
    nextProps.mentors.forEach(function(mentor) {
      if (mentor.approved === false) {
        rejectedMentors[mentor.id] = mentor;
      }
    });
    this.setState( { mentors: rejectedMentors } );
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

  render() {
    const approve = this.approve;
    return(
      <div>
        <Link to='admin_panel'>Back to Admin Panel</Link>

        <Modal className="modal" show={this.state.isModalOpen} onHide={() => this.closeModal()}>
          <MentorShow mentor={this.state.mentor}/>
        </Modal>

        <h1>Rejected Mentor List</h1>
        <Table responsive condensed>
          <thead>
            <tr>
              <th>Video</th>
              <th>Name</th>
              <th>Full Profile</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(this.state.mentors).map((key) => (
             <tr key={key}>
               
               <td>
                 Video placeholder ayyy
               </td>

               <td>
                 {this.state.mentors[key].first_name} {this.state.mentors[key].last_name}
               </td>

               <td>
                 <span
                   className="generic_link"
                   onClick={() => this.openModal(this.state.mentors[key])} >
                   Open Full Profile
                 </span>
                 <Button
                   bsStyle="success"
                   onClick={() => approve(this.state.mentors[key])}>
                   Approve!
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

export default RejectedMentors;
