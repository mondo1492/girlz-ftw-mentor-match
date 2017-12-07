import React from 'react';

class MenteeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mentee = this.props.mentee;
    return(
      <div>
        <h1>{mentee.first_name} {mentee.last_name}</h1>
        <p>Facebook: {mentee.facebook}</p>
        <p>Email: {mentee.email}</p>
        <p>Phone: {mentee.phone}</p>
        <p>Age: {mentee.age}</p>
        <p>City: {mentee.city}</p>
        <p>Country: {mentee.country}</p>
        <p>High School: {mentee.high_school}</p>
        <p>College: {mentee.college}</p>
        <p>Employer: {mentee.employer}</p>
        <p>Major: {mentee.major}</p>
        <p>How interested are you in career advice (0 - 3): {mentee.career_advice_rank}</p>
        <p>How interested are you in personal advice (0 - 3): {mentee.personal_advice_rank}</p>
        <p>Would you prefer a mentor who had your major, or desired major: {mentee.share_major_rank}</p>
        <p>Ideal instagram bio: {mentee.instagram_bio_text}</p>
        <p>What's getting in the way of that bio: {mentee.instagram_bio_why_not_text}</p>
        <p>Describe your personality: {mentee.personality_text}</p>
        <p>What's one thing about you that we can't Google: {mentee.not_on_google_text}</p>
        <p>How do you aspire to make a positive impact on others: {mentee.how_impact_text}</p>
        <p>Any topics you wouldn't feel comfortable discussing with your mentor: {mentee.no_discuss_text}</p>
        <p>Anything else you'd like to add: {mentee.extra_info_text}</p>
        <p>Mentor: {mentee.mentor_name}</p>
      </div>
    );
  }
}

export default MenteeShow;
