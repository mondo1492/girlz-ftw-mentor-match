import React from 'react';

class MentorShow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.mentor);
    const mentor = this.props.mentor;
    return(
      <div>

        <h1>{mentor.first_name} {mentor.last_name}</h1>
        <p>Facebook: {mentor.facebook}</p>
        <p>Email: {mentor.email}</p>
        <p>Phone: {mentor.phone}</p>
        <p>Age: {mentor.age}</p>
        <p>City: {mentor.city}</p>
        <p>Country: {mentor.country}</p>
        <p>High School: {mentor.high_school}</p>
        <p>College: {mentor.college}</p>
        <p>Employer: {mentor.employer}</p>
        <p>Major: {mentor.major}</p>
        <p>How interested are you in giving career advice (0 - 3): {mentor.carorr_advice_rank}</p>
        <p>How interested are you in giving personal advice (0 - 3): {mentor.personal_advice_rank}</p>
        <p>Prefers mentee with same major (0 - 3): {mentor.share_major_rank}</p>
        <p>Ideal instagram bio: {mentor.instagram_bio_text}</p>
        <p>What's getting in the way of that bio: {mentor.instagram_bio_why_not_text}</p>
        <p>Describe your personality: {mentor.personality_text}</p>
        <p>Why do you want to be a mentor: {mentor.why_mentor_text}</p>
        <p>Anything else you'd like to add: {mentor.extra_info_text}</p>
        <p>Mentees: {mentor.mentee_names}</p>

      </div>
    );
  }
}

export default MentorShow;
