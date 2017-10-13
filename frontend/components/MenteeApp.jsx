import React from 'react';

class MenteeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      age: '',
      city: '',
      country: '',
      phone: '',
      facebook: '',
      email: '',
      high_school: '',
      college: '',
      employer: '',
      major: '',
      career_advice_rank: '',
      personal_advice_rank: '',
      motivation_rank: '',
      instagram_bio_text: '',
      instagram_bio_why_not_text: '',
      share_major_rank: '',
      personality_text: '',
      night_text: '',
      not_on_google_text: '',
      how_impact_text: '',
      how_impact_text: '',
      no_discuss_text: '',
      extra_info_text: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          <p className="asterix">*</p>First Name:
          <input
            name="first_name"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p className="asterix">*</p>Last Name:
          <input
            name="last_name"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p className="asterix">*</p>Age:
          <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p className="asterix">*</p>Email:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p className="asterix">*</p>City:
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p className="asterix">*</p>Country:
          <input
            name="country"
            type="text"
            value={this.state.country}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p className="asterix">*</p>Facebook:
          <input
            name="facebook"
            type="text"
            value={this.state.facebook}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Phone:
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleInputChange} />
        </label>
        <label>
          High School:
          <input
            name="high_school"
            type="text"
            value={this.state.high_school}
            onChange={this.handleInputChange} />
        </label>
        <label>
          College:
          <input
            name="college"
            type="text"
            value={this.state.college}
            onChange={this.handleInputChange} />
        </label>
        <label>
          What is your major, or if not applicable, what do you intend to study?
          <input
            name="major"
            type="text"
            value={this.state.major}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Employer:
          <input
            name="employer"
            type="text"
            value={this.state.employer}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <p className="asterix">*</p>How interested are you in career advice?
          <select value={this.state.career_advice_rank} onChange={this.handleInputChange}>
            <option value=0>Not at all</option>
            <option value=1>Slightly</option>
            <option value=2>Moderately</option>
            <option value=3>Extremely</option>
          </select>
        </label>
        <label>
          <p className="asterix">*</p>How interested are you in personal advice?
          <select value={this.state.personal_advice_rank} onChange={this.handleInputChange}>
            <option value=0>Not at all</option>
            <option value=1>Slightly</option>
            <option value=2>Moderately</option>
            <option value=3>Extremely</option>
          </select>
        </label>
        <label>
          <p className="asterix">*</p>How interested are you in finding motivation and inspiration from your mentor?
          <select value={this.state.motivation_rank} onChange={this.handleInputChange}>
            <option value=0>Not at all</option>
            <option value=1>Slightly</option>
            <option value=2>Moderately</option>
            <option value=3>Extremely</option>
          </select>
        </label>
        <label>
          Would you prefer a mentor who had your major, or desired major?
          <select value={this.state.share_major_rank} onChange={this.handleInputChange}>
            <option value=0>Not at all</option>
            <option value=1>Slightly</option>
            <option value=2>Moderately</option>
            <option value=3>Extremely</option>
          </select>
        </label>
        <label>
          Write the Instagram bio you wish you had.
          <textarea name="instagram_bio_text" value={this.state.instagram_bio_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <label>
          What's getting in the way of you having that dream Instagram bio?
          <textarea name="instagram_bio_why_not_text" value={this.state.instagram_bio_why_not_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <label>
          Describe your personality:
          <textarea name="personality_text" value={this.state.personality_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <label>
          What keeps you up at night?
          <textarea name="night_text" value={this.state.night_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <label>
          What's one thing about you that we can't Google?
          <textarea name="not_on_google_text" value={this.state.not_on_google_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <label>
          How do you aspire to make a positive impact on others?
          <textarea name="how_impact_text" value={this.state.how_impact_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <label>
          Are there any topics you would not feel comfortable discussing with your mentor?
          <textarea name="no_discuss_text" value={this.state.no_discuss_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <label>
          Is there anything else you'd like to add?
          <textarea name="extra_info_text" value={this.state.extra_info_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
      </form>
    );
  }
}

export default MenteeApp;
