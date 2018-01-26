import React from 'react';

class MenteeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mentee = this.props.mentee;
    return(
      <div>
        <h2>{mentee.first_name} {mentee.last_name}</h2>
        <p>Email: {mentee.email}</p>
        <p>Phone: {mentee.phone}</p>
        <p>Age: {mentee.age}</p>
        <p>Facebook: {mentee.facebook}</p>
        <p>City: {mentee.city}</p>
        <p>Country: {mentee.country}</p>
        <p>High School: {mentee.high_school}</p>
        <p>College: {mentee.college}</p>
        <p>Employer: {mentee.employer}</p>
        <p>Major: {mentee.major}</p>
        <p>Prefers mentor with same major (0 - 4): {mentee.share_major_rank}</p>
        <p>Desires to pursue this industry: {mentee.industry}</p>
        <p>Prefers mentor with this industry (0 - 4): {mentee.share_industry_rank}</p>
        <p>Dream Instagram Bio: {mentee.instagram_bio_text}</p>
        <p>
          What gets in the way of achieving that bio: {mentee.unblock_methods}
        </p>
        <p>Most excited to get from a mentor: {mentee.provide}</p>
        <p>Application Video URL: {mentee.video_URL}</p>
        <p>Mentor: {mentee.mentor_name}</p>
      </div>
    );
  }
}

export default MenteeShow;
