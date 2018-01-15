import React from 'react';
import merge from 'lodash/merge';
import { Col, Form, Button, Panel, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Page1 from './appPages/page1';
import Page2 from './appPages/page2';
import Page3 from './appPages/page3';
import Page4 from './appPages/page4';
import Page5 from './appPages/page5';
import Page6 from './appPages/page6';
import Page7 from './appPages/page7';
import Page8 from './appPages/page8';

class MentorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: {},
      1: {},
      2: {
        username: "Aaron",
        password: "Meow",
        first_name: "Aaron",
        last_name: "Mondshine",
        age: '2',
        email: 'a'
      },
      3: {
        facebook: 'fab',
        linkedin: 'link',
        phone: '1234567890',
        city: 'Belmont',
        country: 'Albania',
      },
      4: {
        college: 'stanvard',
        major: '',
        share_major_rank: '',
        employer: 'googlebook',
        industry: '',
        share_industry_rank: '',
        job_description: 'friggen sick',
      },
      5: {
        unblock_methods: '',
        provide: '',
      },
      6: {
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
      7: {
        videoURL: '',
      },
      agree_terms: false,
      agree_terms_bad_click: false,
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
    if (value.split("|").length === 4) return;
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
          return <Page3 handleInputChange={this.handleInputChange} page={this.state[2]}/>
          break;
        case 3:
          return <Page4 handleInputChange={this.handleInputChange} page={this.state[3]}/>
          break;
        case 4:
          return <Page5
            handleMultiChange={this.handleMultiChange} handleInputChange={this.handleInputChange} page={this.state[4]}/>
          break;
        case 5:
          return <Page6
            handleInputChange={this.handleInputChange}
            handleMultiChange={this.handleMultiChange}
            page={this.state[5]}/>
          break;
        case 6:
          return <Page7 handleInputChange={this.handleInputChange} page={this.state[6]}/>
          break;
        case 7:
          return <Page8
            page={this.state[7]}/>
          break;
      }
    })();

    return (
      <div >
        <div>
          <Form horizontal onSubmit={this.handleFormSubmit} className={`centerForm, formBackground`}>
            {page}
            <div  className='centerButton'>
              <Button onClick={this.handleBack} className="btn-back">Back</Button>
              <div className='padder'></div>
              <Button onClick={this.handleNext} className="btn-next">Next</Button>
            </div>
            {this.allValidate() ? <Button bsStyle="success" type="submit">Apply</Button> : ""}
          </Form>
        </div>
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
