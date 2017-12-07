import React from 'react';
import merge from 'lodash/merge';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import Page1 from './appPages/page1';
import Page2 from './appPages/page2';
import Page3 from './appPages/page3';
import Page4 from './appPages/page4';

class MentorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "page_0": {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        age: '',
        email: '',
        facebook: '',
        linkedin: '',
        phone: ''
      },
      1: {
        city: '',
        country: '',
        high_school: '',
        college: '',
        employer: '',
        major: '',
      },
      2: {
        career_advice_rank: '',
        personal_advice_rank: '',
        motivation_rank: '',
        instagram_bio_text: '',
        instagram_bio_why_not_text: '',
        share_major_rank: '',
        industry: ''
      },
      3: {
        personality_text: '',
        night_text: '',
        not_on_google_text: '',
        how_impact_text: '',
        extra_info_text: ''
      },
      agree_terms: false,
      agree_terms_bad_click: false,
      disclaimer: true,
      page: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let nextState = merge({}, {'page_0': this.state['page_0']}, {'page_0': {[name]: value}});
    console.log(nextState);
    console.log("MOE");
    this.setState({
      "page_0": nextState["page_0"]
    });
  }

  // handlePageChanges(pageNum, nextState) {
  //   this.setState({pageNum: nextState});
  //   });
  // }
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

  handleBack() {
    if (this.state.page === 1) return;
    this.setState({page: this.state.page - 1});
  }

  validate(pageNum) {
    let pass = true;
    for (const key of Object.keys(this.state[pageNum])) {
      if (this.state[pageNum][key] === '') {
        pass = false;
      }
    }
    console.log(pass);
  }

  handleNext() {
    this.validate(this.state.page);
    this.setState({page: this.state.page + 1});
  }

  render() {
    let page = (() => {
      switch (this.state.page) {
        case 1:
          return <Page1 handleInputChange={this.handleInputChange}/>
          break;
        case 2:
          return <Page2 handleInputChange={this.handleInputChange}/>
          break;
        case 3:
          return <Page3 handleInputChange={this.handleInputChange}/>
          break;
        case 4:
          return <Page4 handleInputChange={this.handleInputChange}/>
          break;
        // case 5:
        //   <Page5 handleInputChange={this.handleInputChange}/>
        //   break;
      }
    })();

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
          {page}
          <Button onClick={this.handleBack} className="btn-back">Back</Button>
          <Button onClick={this.handleNext} className="btn-next">Next</Button>

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
