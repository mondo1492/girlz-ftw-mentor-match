import React from 'react';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

class MentorApp extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: "",
    //   password: "",
    //   first_name: "",
    //   last_name: "",
    //   age: '',
    //   city: '',
    //   country: '',
    //   phone: '',
    //   facebook: '',
    //   linkedin: '',
    //   email: '',
    //   high_school: '',
    //   college: '',
    //   employer: '',
    //   major: '',
    //   career_advice_rank: '',
    //   personal_advice_rank: '',
    //   motivation_rank: '',
    //   instagram_bio_text: '',
    //   instagram_bio_why_not_text: '',
    //   share_major_rank: '',
    //   personality_text: '',
    //   night_text: '',
    //   not_on_google_text: '',
    //   how_impact_text: '',
    //   extra_info_text: '',
    //   agree_terms: false,
    //   agree_terms_bad_click: false,
    //   disclaimer: true,
    // };
    this.state = {
      username: "fakeMentor1",
      password: "fakepassword",
      first_name: "A",
      last_name: "B",
      age: '1',
      city: 'a',
      country: 'a',
      phone: '1234567890',
      facebook: 'a',
      linkedin: 'a',
      email: 'amimecbeepbop@gmail.com',
      high_school: 'a',
      college: 'a',
      employer: 'a',
      major: 'a',
      career_advice_rank: '1',
      personal_advice_rank: '1',
      motivation_rank: '1',
      instagram_bio_text: '1',
      instagram_bio_why_not_text: '1',
      share_major_rank: '1',
      personality_text: '1',
      night_text: '1',
      not_on_google_text: '1',
      how_impact_text: '1',
      extra_info_text: '1',
      agree_terms: true,
      agree_terms_bad_click: false,
      disclaimer: false,
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
      <div>

        <Panel collapsible expanded={this.state.disclaimer}>

          <p>
            Hello! Thank you for your interest in the GIRLZ, FTW mentorship program. We’re thrilled to read your application. Before you fill out our form, we’d like to let you in on a little secret. We’re not a regular mentorship program. We’re a community of girlz that are passionate about elevating and celebrating female voices around the world. We don’t expect our mentors to be THAT girl… you know, the one that always had her shit together and still always managed to blow dry her hair before school / work. We’re looking for real, passionate, #girlbosses that don’t pretend to be perfect, can hustle their way to their dreams, AND still manage to uplift others along the way.
          </p>

          <p>
            What you should know before submitting your application:
          </p>
          <ListGroup>
            <ListGroupItem>
              All of our communication once you join the program happens on Facebook. If you’re accepted as a mentor, you will be added to a Facebook group. This group will be the place where you can connect with other mentors and mentees in the program. We’ll use this group to provide support, encouragement, and advice for each other. You must have a Facebook page if you want to be a part of this program.
            </ListGroupItem>
            <ListGroupItem>
              Every month, we’ll host a call with all mentors and mentees. These calls take place on the first friday of every month. In these calls, we’ll have inspiring women talk to about how they got to where they are today. Each call will be structured differently but is meant to inspire, inform, and mobilize everyone on the call. This means you’ll probably be tapped to speak at one of these calls because we suspect you’re awesome! Attending these calls is mandatory. You can only miss up to 3 calls.
            </ListGroupItem>
            <ListGroupItem>
              You must be willing to commit at least 4 hours a month for a year. Sessions with your mentee should last 1 hour every other week. We suggest you prep for at least 30 minutes before each of your mentee calls. Lastly, you must allot 1 hour for the monthly virtual chats.
              We will be hosting a mentor training on X DATE. Attending this training is required if you want to be a part of the program.
            </ListGroupItem>
          </ListGroup>

        </Panel>

        <Button bsStyle="warning" onClick={() => this.setState({ disclaimer: !this.state.disclaimer })}>
          Toggle Disclaimer
        </Button>

        <Form horizontal onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Username *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsUsername"
                type="text"
                name="username"
                placeholder=""
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Password *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsPassword"
                type="password"
                name="password"
                placeholder=""
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              First Name *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsFirstName"
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Last Name *
            </Col>
            <Col sm={3}>
              <FormControl
              id="formControlsLastName"
              type="text"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Age *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsAge"
                type="number"
                name="age"
                value={this.state.age}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Email *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsEmail"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Facebook *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsFacebook"
                type="text"
                name="facebook"
                value={this.state.facebook}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              LinkedIn *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsLinkedIn"
                type="text"
                name="LinkedIn"
                value={this.state.linkedin}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Phone *
            </Col>
            <Col sm={3}>
              <FormControl
                id="formControlsPhone"
                type="text"
                name="phone"
                placeholder="8001234567"
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
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
          <FormGroup>
            <ControlLabel>How interested are you in giving career advice? *</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              id="formControlsCareer"
              name="career_advice_rank"
              value={this.state.career_advice_rank}
              onChange={this.handleInputChange}
            >
              <option value="0">Not at all</option>
              <option value="1">Slightly</option>
              <option value="2">Moderately</option>
              <option value="3">Extremely</option>
            </FormControl>
          </FormGroup>
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
          <Button bsStyle="success" type="submit">Apply</Button>
        </Form>
      </div>
    );
  }
}


export default MentorApp;
