import React from 'react';

class PotentialMenteeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mentee = this.props.mentee;
    return(
      <div style={{ padding: `0 5%`}}>
        <h2 style={{textAlign: 'center'}}>{mentee.first_name} {mentee.last_name}</h2>
        <p>Email: {mentee.email}</p>
        <p>Phone: {mentee.phone}</p>
        <p>Age: {mentee.age}</p>
        <p>Facebook: {mentee.facebook}</p>
        <p>City: {mentee.city}</p>
        <p>Country: {mentee.country}</p>
        <p>High School: {mentee.high_school}</p>
        <p>College: {mentee.college}</p>
        <p>Major: {mentee.major.split('|').join(', ')}</p>
        <p>Prefers mentor with same major (0 is least, 3 is most): {mentee.share_major_rank}</p>
        <p>Desires to pursue this industry: {mentee.industry.split('|').join(', ')}</p>
        <p>Prefers mentor with this industry (0 is least, 3 is most): {mentee.share_industry_rank}</p>
        <p>Dream Instagram Bio: {mentee.instagram_bio_text}</p>
        <p>
          What gets in the way of achieving that bio: {mentee.instagram_bio_why_not_text.split('|').join(', ')}
        </p>
        <p>Most excited to get from a mentor: {mentee.provide.split('|').join(', ')}</p>
        <p>Application Essay or Video URL: {mentee.video_URL}</p>
      </div>
    );
  }
}

export default PotentialMenteeShow;
