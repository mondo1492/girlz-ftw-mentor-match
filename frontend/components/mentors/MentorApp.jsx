import React from 'react';
import { Col, Form, Button, Panel, FormControl, ControlLabel,
  FormGroup, ListGroup, ListGroupItem, Carousel, InputGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

class MentorApp extends React.Component {
  constructor(props) {
    super(props);
    //actual state below
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
      linkedin: '',
      email: '',
      high_school: '',
      college: '',
      employer: '',
      major: '',
      why_mentor: "",
      struggles: [],
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
      disclaimer: true,
      activeCarouselIndex: 0,
      carouselDirection: null,
    };
    //test state below for quick form
    // this.state = {
    //   username: "fakeMentor1",
    //   password: "fakepassword",
    //   first_name: "A",
    //   last_name: "B",
    //   age: '1',
    //   city: 'a',
    //   country: 'a',
    //   phone: '1234567890',
    //   facebook: 'a',
    //   linkedin: 'a',
    //   email: 'amimecbeepbop@gmail.com',
    //   high_school: 'a',
    //   college: 'a',
    //   employer: 'a',
    //   major: 'a',
    //   why_mentor: 'cuz',
    //   struggles: [],
    //   career_advice_rank: '1',
    //   personal_advice_rank: '1',
    //   motivation_rank: '1',
    //   instagram_bio_text: '1',
    //   instagram_bio_why_not_text: '1',
    //   share_major_rank: '1',
    //   personality_text: '1',
    //   night_text: '1',
    //   not_on_google_text: '1',
    //   how_impact_text: '1',
    //   extra_info_text: '1',
    //   agree_terms: true,
    //   agree_terms_bad_click: false,
    //   disclaimer: true,
    //   activeCarouselIndex : 0,
    //   carouselDirection: null,
    // };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCarouselSelect = this.handleCarouselSelect.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value);
    console.log(event.target.type);
    const target = event.target;
    let value;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else if (target.type === 'select-multiple') {
      value = this.state.struggles;

      //if already selected, deselect
      let idx = value.indexOf(target.value);
      if (idx === -1) {
        value.push(target.value)
      } else {
        delete value[idx];
      }

    } else {
      value = target.value;
    }
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

  handleCarouselSelect(selectedIndex, e) {
   console.log(`selected=${selectedIndex}, direction=${e.direction}`);
   this.setState({
     activeCarouselIndex: selectedIndex,
     carouselDirection: e.direction,
   });
 }

  render() {
    return (
      <div>
        <Carousel
          activeIndex={this.state.activeCarouselIndex}
          direction={this.state.carouselDirection}
          interval={null}
          onSelect={this.handleCarouselSelect}
          >

          <Carousel.Item>
              <h3>
                Hello! Thank you for your interest in the GIRLZ, FTW mentorship program. We’re thrilled to read your application. Before you fill out our form, we’d like to let you in on a little secret. We’re not a regular mentorship program. We’re a community of girlz that are passionate about elevating and celebrating female voices around the world. We don’t expect our mentors to be THAT girl… you know, the one that always had her shit together and still always managed to blow dry her hair before school / work. We’re looking for real, passionate, #girlbosses that don’t pretend to be perfect, can hustle their way to their dreams, AND still manage to uplift others along the way.
              </h3>
          </Carousel.Item>
          <Carousel.Item>
            <h1>
              What you should know before submitting your application:
            </h1>
          </Carousel.Item>
          <Carousel.Item>
            <h4>
              All of our communication once you join the program happens on Facebook. If you’re accepted as a mentor, you will be added to a Facebook group. This group will be the place where you can connect with other mentors and mentees in the program. We’ll use this group to provide support, encouragement, and advice for each other. You must have a Facebook page if you want to be a part of this program.
            </h4>
          </Carousel.Item>
          <Carousel.Item>
            <h4>
              Every month, we’ll host a call with all mentors and mentees. These calls take place on the first friday of every month. In these calls, we’ll have inspiring women talk to about how they got to where they are today. Each call will be structured differently but is meant to inspire, inform, and mobilize everyone on the call. This means you’ll probably be tapped to speak at one of these calls because we suspect you’re awesome! Attending these calls is mandatory. You can only miss up to 3 calls.
            </h4>
          </Carousel.Item>
          <Carousel.Item>
            <h4>
              You must be willing to commit at least 4 hours a month for a year. Sessions with your mentee should last 1 hour every other week. We suggest you prep for at least 30 minutes before each of your mentee calls. Lastly, you must allot 1 hour for the monthly virtual chats.
              We will be hosting a mentor training on X DATE. Attending this training is required if you want to be a part of the program.
            </h4>
          </Carousel.Item>

        </Carousel>

        <FontAwesome name='circle-o-notch' size='4x' spin
          style={{ textShadow: '0 5px 0 rgba(0, 0, 0, 0.1)' }}
          />


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
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='envelope-o'/>
                </InputGroup.Addon>

                <FormControl
                  id="formControlsEmail"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Facebook *
            </Col>
            <Col sm={3}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='facebook'/>
                </InputGroup.Addon>

                <FormControl
                  id="formControlsFacebook"
                  type="text"
                  name="facebook"
                  placeholder="facebook.com/girlzftw"
                  value={this.state.facebook}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              LinkedIn *
            </Col>
            <Col sm={3}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='linkedin'/>
                </InputGroup.Addon>

                <FormControl
                  id="formControlsLinkedIn"
                  type="text"
                  name="LinkedIn"
                  value={this.state.linkedin}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
              Phone *
            </Col>
            <Col sm={3}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='phone'/>
                </InputGroup.Addon>

                <FormControl
                  id="formControlsPhone"
                  type="text"
                  name="phone"
                  placeholder="8001234567"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
               Employer
            </Col>
            <Col sm={3}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='handshake-o'/>
                </InputGroup.Addon>

                <FormControl
                  id="formControlsEmployer"
                  type="text"
                  name="employer"
                  value={this.state.employer}
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
               City
            </Col>
            <Col sm={3}>
                <FormControl
                  id="formControlsCity"
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
               Country
            </Col>
            <Col sm={3}>
                <FormControl
                  id="formControlsCountry"
                  type="text"
                  name="country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
                />
            </Col>
          </FormGroup>
          { // why do you want to be a mentor
          }
          <FormGroup>
            <ControlLabel>
               Why do you want to be a mentor?
             </ControlLabel>
             <br/>
            <Col sm={3}>
              <FormControl
                componentClass="textarea"
                id="formControlsCountry"
                name="why_mentor"
                value={this.state.why_mentor}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <ControlLabel>
               What was your major area in college?
             </ControlLabel>
             <br/>
            <Col sm={3}>
              <FormControl
                componentClass="select"
                id="formControlsMajor"
                name="major"


                onChange={this.handleInputChange}
                defaultValue='default'
              >
                <option disabled value='default'>-- Select major area --</option>
                <option value="International Relations and Political Science">
                  International Relations and Political Science
                </option>
                <option value="Arts and Humanities">
                  Arts and Humanities
                </option>
                <option value="Science, Technology, and Math">
                  Science, Technology, and Math
                </option>
                <option value="Environment">
                  Environment
                </option>
                <option value="Business">
                  Business
                </option>
                <option value="Social Sciences">
                  Social Sciences
                </option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup>
            <ControlLabel>
               We all get in the way of our own success.
               Which of the following have you struggled with and successfully conquered?
             </ControlLabel>
             <br/>
            <Col sm={3}>
              <FormControl
                componentClass="select"
                multiple
                id="formControlsMajor"
                name="struggles"
                value={this.state.struggles}
                onChange={this.handleInputChange}
              >
                <option value="Procrastination">
                  Procrastination
                </option>
                <option value="Indecision">
                  Indecision
                </option>
                <option value="Acting as a lone ranger / not delegating">
                  Acting as a lone ranger / not delegating
                </option>
                <option value="Not saying no to projects that don't inspire you">
                  Not saying no to projects that don't inspire you
                </option>
              </FormControl>
            </Col>
          </FormGroup>

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
