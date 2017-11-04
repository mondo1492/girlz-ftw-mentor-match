import React from 'react';
import { Button } from 'react-bootstrap';

class MentorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
      extra_info_text: '',
      agree_terms: false,
      agree_terms_bad_click: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.agree_terms) {
      console.log("success");
    } else {
      this.setState({agree_terms_bad_click: true}, () => {
        console.log('failure');
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Button bsStyle="success" bsSize="small">React Bootstrap</Button>
        <label>
          <p className="asterix">*</p>Username:
          <input
            name="username"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>Password:
          <input
            name="password"
            type="password"
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>First Name:
          <input
            name="first_name"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>Last Name:
          <input
            name="last_name"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>Age:
          <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>Email:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>City:
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>Country:
          <input
            name="country"
            type="text"
            value={this.state.country}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>Facebook:
          <input
            name="facebook"
            type="text"
            value={this.state.facebook}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Phone:
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          High School:
          <input
            name="high_school"
            type="text"
            value={this.state.high_school}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          College:
          <input
            name="college"
            type="text"
            value={this.state.college}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          What was your major?
          <input
            name="major"
            type="text"
            value={this.state.major}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Employer:
          <input
            name="employer"
            type="text"
            value={this.state.employer}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>How interested are you in giving career advice?
          <select name="career_advice_rank" value={this.state.career_advice_rank} onChange={this.handleInputChange}>
            <option value="0">Not at all</option>
            <option value="1">Slightly</option>
            <option value="2">Moderately</option>
            <option value="3">Extremely</option>
          </select>
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>How interested are you in giving personal advice?
          <select name="personal_advice_rank" value={this.state.personal_advice_rank} onChange={this.handleInputChange}>
            <option value="0">Not at all</option>
            <option value="1">Slightly</option>
            <option value="2">Moderately</option>
            <option value="3">Extremely</option>
          </select>
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>How interested are you in providing motivation and inspiration for your mentees?
          <select name="motivation_rank" value={this.state.motivation_rank} onChange={this.handleInputChange}>
            <option value="0">Not at all</option>
            <option value="1">Slightly</option>
            <option value="2">Moderately</option>
            <option value="3">Extremely</option>
          </select>
        </label>
        <br/>
        <label>
          Would you prefer a mentee who has or desires to pursue your major?
          <select name="share_major_rank" value={this.state.share_major_rank} onChange={this.handleInputChange}>
            <option value="0">Not at all</option>
            <option value="1">Slightly</option>
            <option value="2">Moderately</option>
            <option value="3">Extremely</option>
          </select>
        </label>
        <br/>
        <label>
          Write the Instagram bio you wish you had.
          <textarea name="instagram_bio_text" value={this.state.instagram_bio_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        <label>
          What's getting in the way of you having that dream Instagram bio?
          <textarea name="instagram_bio_why_not_text" value={this.state.instagram_bio_why_not_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        <label>
          Describe your personality:
          <textarea name="personality_text" value={this.state.personality_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        <label>
          What keeps you up at night?
          <textarea name="night_text" value={this.state.night_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        <label>
          What's one thing about you that we can't Google?
          <textarea name="not_on_google_text" value={this.state.not_on_google_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        <label>
          How do you aspire to make a positive impact on others?
          <textarea name="how_impact_text" value={this.state.how_impact_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        <label>
          Is there anything else you'd like to add?
          <textarea name="extra_info_text" value={this.state.extra_info_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        All mentors are required to set aside __ hours per month. Some other stuff that's needed.
        Blah blah etc. All of our communications happen over Facebook groups,
        so you must have a Facebook to be a GirlzFTW mentor.
        <br/>
        <label style={{color: this.state.agree_terms_bad_click ? 'red' : 'black'}}>
          I have read and agree to these requirements.
          <input
            name="agree_terms"
            type="checkbox"
            value={this.state.agree_terms}
            onChange={this.handleInputChange} />
        </label>
        <button type="submit">Apply</button>
      </form>
    );
  }
}


export default MentorApp;
