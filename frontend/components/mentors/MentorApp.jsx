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
// currently not using page8 - applying directly from 7
import Page8 from './appPages/page8';


class MentorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: {},
      1: {},
      2: {
        username: "RaviMentortest",
        password: "ravimentorpw",
        first_name: "Ravi",
        last_name: "Raval",
        age: '27',
        email: 'raviraval@gmail.com'
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
        videoURL: '',
      },
      agree_terms: true,
      page: 0,
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

    // flatten state
    const flattenedState = {};
    for (let i = 2; i < 7; i++) {
      for (const key of Object.keys(this.state[i])) {
        flattenedState[key] = this.state[i][key];
      }
    }
    this.props.createMentor(flattenedState).then(
      () => this.props.history.push('/'));
  }

  handleBack() {
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

  badNext() {

  }

  handleNext() {
    // TODO: if user clicks next when greyed, flash error
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
      }
    })();
    const nextButton = ( () => {
      if (this.state.page !== 6) {
        if (this.validate()) {
          return <Button onClick={this.handleNext} className="btn-next">Next</Button>
        }
        else {
          return <Button disabled onClick={this.handleNext} className="btn-next">Next</Button>
        }
      } else {
        return (
          <Button
             bsStyle="success"
             disabled={ this.state['6'].videoURL === '' }
             onClick={this.handleFormSubmit} type="button">
              Apply
          </Button>
        );
      }
    })();
    return (
      <div>
        <div>
          <Form horizontal className={`centerForm, formBackground`}>
            {page}
            <div className='centerButton'>
              { this.state.page === 0 ? '' :
                <Button onClick={this.handleBack} className="btn-back">
                  Back
                </Button>
              }
              <div className='padder'></div>
              { nextButton }
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default MentorApp;
