import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page5 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
          <Grid>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    All of a sudden, you have no commitments or obligations
                    tomorrow. How do you spend the day?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q1" name="q1" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    Describe how you contribute to other’s growth and learning when you’re at your best. In what ways do you support others being at their best?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q2" name="q2" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    What are you passionate about, and what have you done to pursue those passions?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q3" name="q3" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    AIn your work and life experiences, what have you learned about people?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q4" name="q4" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    What impact do you want to have in the world?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q5" name="q5" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    What’s your greatest accomplishment?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q6" name="q6" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    What changes are you noticing in your industry, community, or the world that need more attention?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q7" name="q7" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    What are you struggling with in your career or a project?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q8" name="q8" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    Tell us something about yourself that we can't Google.
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q9" name="q9" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                  <label text-align="left">
                    Why do you want to be a Girlz, FTW mentor?
                  </label>
              </Col>
            </Row>
            <Row>
              <Col class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                <textarea id='formControlsTextarea' className="form-control" id="q10" name="q10" onChange={this.props.handleInputChange}/>
              </Col>
            </Row>
          </Grid>
      )
    }
  }

export default Page5;
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
