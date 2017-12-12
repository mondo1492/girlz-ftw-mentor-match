import React from 'react';
import merge from 'lodash/merge';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Page1 from './appPages/page1';
import Page2 from './appPages/page2';
import Page3 from './appPages/page3';
import Page4 from './appPages/page4';

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
        facebook: '',
        linkedin: '',
        phone: '',
        city: '',
        country: '',

        employer: '',

      },
      2: {
        major: '',
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
      page: 0,

      high_school: '',
      college: '',
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
    this.setState({ [pageNum]: nextState[pageNum] }, () => {
      console.log(this.state);
    });
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
          {this.validate() ?
            <Button onClick={this.handleNext} className="btn-next">Next</Button> :
            <Button onClick={this.badNext} disabled className="btn-next">Next</Button>
          }
          {this.allValidate() ? <Button bsStyle="success" type="submit">Apply</Button> : ""}
        </Form>
      </div>
    );
  }
}


export default MentorApp;
