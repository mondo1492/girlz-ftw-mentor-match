import React from 'react';
import merge from 'lodash/merge';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Page1 from './appPages/page1';
import Page2 from './appPages/page2';
import Page3 from './appPages/page3';
import Page4 from './appPages/page4';
import Page5 from './appPages/page5';

class MentorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: {
        username: "Aaron",
        password: "Meow",
        first_name: "Aaron",
        last_name: "Mondshine",
        age: '2',
        email: 'a'
      },
      1: {
        facebook: 'fab',
        linkedin: 'link',
        phone: '1234567890',
        city: 'Belmont',
        country: 'Albania',
      },
      2: {
        college: '',
        major: '',
        share_major_rank: '',
        employer: '',
        industry: '',
        share_industry_rank: '',
        job_description: '',
      },
      3: {
        personality_text: '',
        night_text: '',
        not_on_google_text: '',
        how_impact_text: '',
        extra_info_text: ''
      },


      4: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: ''
      },
      agree_terms: false,
      agree_terms_bad_click: false,
      disclaimer: true,
      page: 0,

      instagram_bio_why_not_text: '',
      high_school: '',
      college: '',
      instagram_bio_text: '',
      major: '',

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiChange = this.handleMultiChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleMultiChange(value, name, pageNum = this.state.page) {
    let nextState = merge({}, {[pageNum]: this.state[pageNum]}, {[pageNum]: {[name]: value}});
    this.setState({ [pageNum]: nextState[pageNum] });
  }

  handleInputChange(event, pageNum = this.state.page) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let nextState = merge({}, {[pageNum]: this.state[pageNum]}, {[pageNum]: {[target.name]: value}});
    this.setState({
      [pageNum]: nextState[pageNum]
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.agree_terms) {
      console.log("success");

      this.props.createMentor(this.state).then(
        () => this.props.history.push('/'));
    } else {
      this.setState({agree_terms_bad_click: true}, () => {
        console.log('failure');
      });
    }
  }

  handleBack() {
    if (this.state.page === 0) return;
    this.setState({page: this.state.page - 1});
  }

  validate() {
    let pass = true;
    for (const key of Object.keys(this.state[this.state.page])) {
      if (this.state[this.state.page][key] === '') {
        pass = false;
      }
    }
    return pass;
  }

  allValidate() {
    return false;
  }

  badNext() {

  }

  handleNext() {
    this.validate(this.state.page);
    this.setState({page: this.state.page + 1});
  }

  render() {
    let page = (() => {
      switch (this.state.page) {
        case 0:
          return <Page1 handleInputChange={this.handleInputChange} page={this.state[0]}/>
          break;
        case 1:
          return <Page2 handleInputChange={this.handleInputChange} page={this.state[1]}/>
          break;
        case 2:
          return <Page3
            handleMultiChange={this.handleMultiChange} handleInputChange={this.handleInputChange} page={this.state[2]}/>
          break;
        case 3:
          return <Page4 handleInputChange={this.handleInputChange} page={this.state[3]}/>
          break;
        case 4:
          return <Page5 handleInputChange={this.handleInputChange} page={this.state[4]}/>
          break;
        case 5:
          return <Page6 page={this.state[5]}/>
          break;
      }
    })();

    return (
      <div>
        <Form horizontal onSubmit={this.handleFormSubmit}>
          {page}
          <Button onClick={this.handleBack} className="btn-back">Back</Button>
          <Button onClick={this.handleNext} className="btn-next">Next</Button>
          {this.allValidate() ? <Button bsStyle="success" type="submit">Apply</Button> : ""}
        </Form>
      </div>
    );
  }
}


export default MentorApp;
//
// {this.validate() ?
//   <Button onClick={this.handleNext} className="btn-next">Next</Button> :
//   <Button onClick={this.badNext} disabled className="btn-next">Next</Button>
// }
