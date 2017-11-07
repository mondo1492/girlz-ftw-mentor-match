import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class MentorChangeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalName: "",
      original: "",
      allMentors: this.props.allMentors,
      originalMentor: this.props.mentee.mentor_name ? this.props.mentee.mentor_name : "No One",
      selectedMentor: null,
      mentee: this.props.mentee,
      madeChange: false,
      fullOriginalMentor: null,
      mentorList: this.props.mentors
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    let name = "";
    let fullOriginalMentor = null;
    let originalId = this.props.mentee.user_id ? this.props.mentee.user_id : "";
    this.props.mentee.mentor_name ? name = this.props.mentee.mentor_name : name = "No One";
    for (let i = 0; i < this.props.allMentors.length; i++) {
     if ((this.props.allMentors[i].id) === this.props.mentee.user_id) {

       fullOriginalMentor = this.props.allMentors[i];
       break;
     }
   }
    this.setState({original: originalId, originalName: name, fullOriginalMentor: fullOriginalMentor});
  }

  handleChange(e) {
    let originalMentor = null;
    let selectedMentor = null;
    let newMentee = this.state.mentee;
    if ((this.state.original.toString()) === e.target.value) {
      newMentee.user_id = this.state.original;
      selectedMentor = this.state.fullOriginalMentor;
    } else if (e.target.value === 'none') {
      newMentee.user_id = null;
      selectedMentor = null;
    } else {
      for (let i = 0; i < this.state.mentorList.length; i++) {
       if ((this.state.mentorList[i].id).toString() === e.target.value) {
         selectedMentor = this.state.mentorList[i];
         break;
       }
     }
      newMentee.user_id = selectedMentor.id;
    }
    this.setState({mentee: newMentee, selectedMentor: selectedMentor, madeChange: true});
  }

  handleSubmit() {
    let newMenteeInfo = this.state.mentee;
    let prevMentor = this.state.fullOriginalMentor;
    let postMentor = this.state.selectedMentor;
    if (postMentor === null) {
      prevMentor.status = false;
      postMentor = null;
    } else {
      if (prevMentor !== null) {
        prevMentor.status = false;
      }
      postMentor.status = true;
    }
    this.props.updateMentee(newMenteeInfo).then(() => {
      this.props.updateWithSelectedMentor(prevMentor, postMentor);
    }, ()=> {
    });
  }

  render() {
    return(
      <div>
        <h2>Select Or Change Current Mentor</h2>
        <div>
          <h4>{this.state.mentee.first_name} is currently matched with {this.state.originalMentor}</h4>
        </div>
          <h4>Match {this.state.mentee.first_name} with </h4>
            <select onChange={(e) => this.handleChange(e)}>
              <option value='' hidden>Select a Mentor</option>
              <option value={`${this.state.original}`}>Current Mentor - {this.state.originalName}</option>
              {this.state.mentorList.map((mentor) => (
                <option value={`${mentor.id}`}
                key={mentor.id}>{mentor.first_name} {mentor.last_name}</option>
              ))}
              { this.state.originalName === 'No One' ?
                "" :
                <option value={"none"}>No Mentor</option>
              }
            </select>
            <h4>???</h4>
            {this.state.madeChange && this.state.original !== this.state.mentee.user_id ?
              <Button onClick={() => this.handleSubmit()}>SUBMIT!!!</Button> :
              <Button onClick={() => this.props.closeModal()}>No thanks, I'll leave it as is</Button>
            }
      </div>
    );
  }
}

export default MentorChangeView;
