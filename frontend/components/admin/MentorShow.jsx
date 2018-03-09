import React from 'react';

class MentorShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mentor = this.props.mentor;
    return(
      <div style={{ padding: `0 5%`}}>
        <h2 style={{textAlign: 'center'}}>{mentor.first_name} {mentor.last_name}</h2>
        <p>Email: {mentor.email}</p>
        <p>Phone: {mentor.phone}</p>
        <p>Age: {mentor.age}</p>
        <p>Facebook: {mentor.facebook}</p>
        <p>LinkedIn: {mentor.linkedin}</p>
        <p>City: {mentor.city}</p>
        <p>Country: {mentor.country}</p>
        <p>College: {mentor.college}</p>
        <p>Employer: {mentor.employer}</p>
        <p>Major: {mentor.major}</p>
        <p>Prefers mentee with same major (0 - 3): {mentor.share_major_rank}</p>
        <p>Industry: {mentor.industry}</p>
        <p>Prefers mentee with same industry (0 - 3): {mentor.share_industry_rank}</p>
        <p>Job Description: {mentor.job_description}</p>
        <p>Most excited to provide for mentee: {mentor.provide}</p>
        <p>Unblock Methods: {mentor.unblock_methods}</p>
        <p>Application Video URL: {mentor.video_URL}</p>
        <p>Mentees: {mentor.mentee_names}</p>
      </div>
    );
  }
}

export default MentorShow;
