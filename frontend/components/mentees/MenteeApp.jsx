import React from 'react';
import merge from 'lodash/merge';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

const CLOUDINARY_UPLOAD_PRESET = 'girlzftw';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/girlzftw/upload';

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
      no_discuss_text: '',
      extra_info_text: '',
      agree_terms: false,
      agree_terms_bad_click: false,
      uploadedFileCloudinaryUrl: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let nextState = merge({}, {'page_0': this.state['page_0']}, {'page_0': {[name]: value}});
    console.log(nextState);
    console.log("MOE");
    this.setState({
      "page_0": nextState
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.agree_terms) {
      this.props.createMentee(this.state).then(
        () => this.props.history.push('/'));
    } else {
      this.setState({agree_terms_bad_click: true}, () => {
      });
    }
  }

  render() {
    return (
      <div>
        <div className="parental_form_disclaimer">
          <p>***Before Filling Out Application, make sure to {}
          {<a href="http://res.cloudinary.com/dluh2fsyd/image/upload/v1502571356/sandwhich_f7gbm3.png" download="Sushi">download</a>}
          {} the parental form and have it signed by your parent/s (if you are under 18 years of age).
          You will need to upload this document in order to submit your application.
          </p>
        </div>

      <form onSubmit={this.handleFormSubmit}>
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
          What is your major, or if not applicable, what do you intend to study?
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
          <p className="asterix">*</p>How interested are you in career advice?
          <select name="career_advice_rank" value={this.state.career_advice_rank} onChange={this.handleInputChange}>
            <option value="0">Not at all</option>
            <option value="1">Slightly</option>
            <option value="2">Moderately</option>
            <option value="3">Extremely</option>
          </select>
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>How interested are you in personal advice?
          <select name="personal_advice_rank" value={this.state.personal_advice_rank} onChange={this.handleInputChange}>
            <option value="0">Not at all</option>
            <option value="1">Slightly</option>
            <option value="2">Moderately</option>
            <option value="3">Extremely</option>
          </select>
        </label>
        <br/>
        <label>
          <p className="asterix">*</p>How interested are you in finding motivation and inspiration from your mentor?
          <select name="motivation_rank" value={this.state.motivation_rank} onChange={this.handleInputChange}>
            <option value="0">Not at all</option>
            <option value="1">Slightly</option>
            <option value="2">Moderately</option>
            <option value="3">Extremely</option>
          </select>
        </label>
        <br/>
        <label>
          Would you prefer a mentor who had your major, or desired major?
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
          Are there any topics you would not feel comfortable discussing with your mentor?
          <textarea name="no_discuss_text" value={this.state.no_discuss_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        <label>
          Is there anything else you'd like to add?
          <textarea name="extra_info_text" value={this.state.extra_info_text} onChange={this.handleInputChange} rows="10" cols="30"></textarea>
        </label>
        <br/>
        All mentees have certain requirements that Nicol will tell us later.
        <br/>
        <div className="FileUpload">
          {this.state.uploadedFileCloudinaryUrl === '' ?
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            :
            <div>
              <p>Parental Form Snapshot</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>
          }
        </div>
        <label style={{color: this.state.agree_terms_bad_click ? 'red' : 'black'}}>
          I have read and agree to these requirements.
          <input
            name="agree_terms"
            type="checkbox"
            value={this.state.agree_terms}
            onChange={this.handleInputChange} />
        </label>

        <Button type="submit">Apply</Button>
      </form>

        <div>

      </div>
    </div>
    );
  }
}

export default MenteeApp;
