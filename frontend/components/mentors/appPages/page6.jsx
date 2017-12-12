import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        disclaimerOpen: true,
      }
    }
    render() {
      return(
          <Grid>
            <Panel collapsible expanded={this.state.disclaimerOpen}>

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

            <Button bsStyle="warning" onClick={() => this.setState({ disclaimerOpen: !this.state.disclaimerOpen })}>
              Toggle Disclaimer
            </Button>
          </Grid>
      )
    }
  }

export default Page6;
//
// <label>
//   <p className="asterix">*</p>City:
//   <input
//     name="city"
//     type="text"
//     value={this.state.city}
//     onChange={this.handleInputChange} />
// </label>
// <br/>
// <label>
//   <p className="asterix">*</p>Country:
//   <input
//     name="country"
//     type="text"
//     value={this.state.country}
//     onChange={this.handleInputChange} />
// </label>
// <label>
//   High School:
//   <input
//     name="high_school"
//     type="text"
//     value={this.state.high_school}
//     onChange={this.handleInputChange} />
// </label>
// <br/>
// <label>
//   College:
//   <input
//     name="college"
//     type="text"
//     value={this.state.college}
//     onChange={this.handleInputChange} />
// </label>
// <br/>
// <label>
//   What was your major?
//   <input
//     name="major"
//     type="text"
//     value={this.state.major}
//     onChange={this.handleInputChange} />
// </label>
// <br/>
// <label>
//   Employer:
//   <input
//     name="employer"
//     type="text"
//     value={this.state.employer}
//     onChange={this.handleInputChange} />
// </label>
// <br/>
// <FormGroup>
//   <ControlLabel>How interested are you in giving career advice? *</ControlLabel>
//   <FormControl
//     componentClass="select"
//     placeholder="select"
//     id="formControlsCareer"
//     name="career_advice_rank"
//     value={this.state.career_advice_rank}
//     onChange={this.handleInputChange}
//   >
//     <option value="0">Not at all</option>
//     <option value="1">Slightly</option>
//     <option value="2">Moderately</option>
//     <option value="3">Extremely</option>
//   </FormControl>
// </FormGroup>
// <label>
//   <p className="asterix">*</p>How interested are you in giving personal advice?
//   <select name="personal_advice_rank" value={this.state.personal_advice_rank} onChange={this.handleInputChange}>
//     <option value="0">Not at all</option>
//     <option value="1">Slightly</option>
//     <option value="2">Moderately</option>
//     <option value="3">Extremely</option>
//   </select>
// </label>
// <br/>
// <label>
//   <p className="asterix">*</p>How interested are you in providing motivation and inspiration for your mentees?
//   <select name="motivation_rank" value={this.state.motivation_rank} onChange={this.handleInputChange}>
//     <option value="0">Not at all</option>
//     <option value="1">Slightly</option>
//     <option value="2">Moderately</option>
//     <option value="3">Extremely</option>
//   </select>
// </label>
// <br/>
// <label>
//   Would you prefer a mentee who has or desires to pursue your major?
//   <select name="share_major_rank" value={this.state.share_major_rank} onChange={this.handleInputChange}>
//     <option value="0">Not at all</option>
//     <option value="1">Slightly</option>
//     <option value="2">Moderately</option>
//     <option value="3">Extremely</option>
//   </select>
// </label>
// <br/>
// <label>
//   Write the Instagram bio you wish you had.
//   <textarea name="instagram_bio_text" value={this.state.instagram_bio_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
// </label>
// <br/>
// <label>
//   What's getting in the way of you having that dream Instagram bio?
//   <textarea name="instagram_bio_why_not_text" value={this.state.instagram_bio_why_not_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
// </label>
// <br/>
// <label>
//   Describe your personality:
//   <textarea name="personality_text" value={this.state.personality_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
// </label>
// <br/>
// <label>
//   What keeps you up at night?
//   <textarea name="night_text" value={this.state.night_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
// </label>
// <br/>
// <label>
//   What's one thing about you that we can't Google?
//   <textarea name="not_on_google_text" value={this.state.not_on_google_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
// </label>
// <br/>
// <label>
//   How do you aspire to make a positive impact on others?
//   <textarea name="how_impact_text" value={this.state.how_impact_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
// </label>
// <br/>
// <label>
//   Is there anything else you'd like to add?
//   <textarea name="extra_info_text" value={this.state.extra_info_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
// </label>
// <br/>
// All mentors are required to set aside __ hours per month. Some other stuff that's needed.
// Blah blah etc. All of our communications happen over Facebook groups,
// so you must have a Facebook to be a GirlzFTW mentor.
// <br/>
// <label style={{color: this.state.agree_terms_bad_click ? 'red' : 'black'}}>
//   I have read and agree to these requirements.
//   <input
//     name="agree_terms"
//     type="checkbox"
//     value={this.state.agree_terms}
//     onChange={this.handleInputChange} />
// </label>
