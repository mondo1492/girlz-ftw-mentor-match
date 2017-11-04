import React from 'react';
import { Link } from 'react-router-dom';

class MentorChangeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalName: "",
      original: "",
      originalMentor: this.props.mentee.mentor_name ? this.props.mentee.mentor_name : "No One",
      selectedMentor: null,
      mentee: this.props.mentee,
      madeChange: false,
      mentorList: this.props.mentors
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    let name = "";
    // console.log(this.props.mentee.mentor_name);
    this.props.mentee.mentor_name ? name = this.props.mentee.mentor_name : name = "No One";
    this.setState({original: this.props.mentee.user_id, originalName: name});
  }

  handleChange(e) {
    let originalMentor = null;
    let selectedMentor = null;
    let newMentee = this.state.mentee;
    if (this.state.original.toString() === e.target.value) {
      newMentee.user_id = this.state.original;
      selectedMentor = this.state.originalMentor;
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
    // console.log(selectedMentor.last_name);
    this.setState({mentee: newMentee, selectedMentor: selectedMentor, madeChange: true});
  }

  handleSubmit() {
    let newMenteeInfo = this.state.mentee;
    let newMentorInfo = this.state.selectedMentor;
    if (newMentorInfo === null) {
      newMentorInfo = this.state.originalMentor;
      newMentorInfo.status = true;
    } else {
      newMentorInfo.status = false;
    }
    this.props.updateMentee(newMenteeInfo).then(() => {
      this.props.updateWithSelectedMentor(newMentorInfo);
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
              <button onClick={() => this.handleSubmit()}>SUBMIT!!!</button> :
              <button onClick={() => this.props.closeModal()}>No thanks, I'll leave it as is</button>
            }
      </div>
    );
  }
}

export default MentorChangeView;
