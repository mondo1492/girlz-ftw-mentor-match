import React from 'react';
import { Grid, Row, Col, Form, Button, Panel, InputGroup, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';


class Page3 extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
          <h3 className='centerForm'>Some background questions</h3>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              College *
            </Col>
            <Col sm={8}>
              <InputGroup>
                <InputGroup.Addon>
                  <FontAwesome name='graduation-cap'/>
                </InputGroup.Addon>
                <FormControl
                  id="formControlsCollege"
                  type="text"
                  name="college"
                  value={this.props.page.college}
                  onChange={this.props.handleInputChange}
                  />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            What was your college major? *
          </Col>
          <Col sm={8}>
            <Select
              name="major"
              value={this.props.page.major}
              onChange={(value) => this.props.handleMultiChange(value, 'major')}
              multi
              delimiter="|"
              simpleValue
              joinValues
              options={[
                { value: 'Science', label: 'Science' },
                { value: 'Engineering', label: 'Engineering' },
                { value: 'Communcations, Marketing', label: 'Communcations, Marketing' },
                { value: 'Political Science, International Relations', label: 'Political Science, International Relations' },
                { value: 'Finance, Economics', label: 'Finance, Economics' },
                { value: 'Liberal Arts', label: 'Liberal Arts' }
              ]}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            Employer *
          </Col>
          <Col sm={8}>
            <InputGroup>
              <InputGroup.Addon>
                <FontAwesome name='handshake-o'/>
              </InputGroup.Addon>
              <FormControl
                id="formControlsEmployer"
                type="text"
                name="employer"
                value={this.props.page.employer}
                onChange={this.props.handleInputChange}
                />
            </InputGroup>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            In which industry do you work? *
          </Col>
          <Col sm={8}>
            <Select
              name="industry"
              value={this.props.page.industry}
              onChange={(value) => this.props.handleMultiChange(value, 'industry')}
              multi
              delimiter="|"
              simpleValue
              joinValues
              options={[
                { value: 'International Relations, Politics', label: 'International Relations, Politics' },
                { value: 'Finance', label: 'Finance' },
                { value: 'Accounting, Legal', label: 'Accounting, Legal' },
                { value: 'Media', label: 'Media' },
                { value: 'Technology', label: 'Technology' },
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Performing Arts, Sports, Related', label: 'Performing Arts, Sports, Related' },
                { value: 'Healthcare', label: 'Healthcare' },
                { value: 'Education', label: 'Education' },
                { value: 'Agriculture, Forestry, Fishing', label: 'Agriculture, Forestry, Fishing' }
              ]}
            />
          </Col>
        </FormGroup>
        <FormGroup >
          <Col componentClass={ControlLabel} sm={3}>
            Describe your job.
          </Col>
          <Col sm={8}>
              <textarea style={{ height: 150 }} id='formControlsTextarea' value={this.props.page.job_description} className="form-control" id="job_description" name="job_description" onChange={this.props.handleInputChange}/>
          </Col>
        </FormGroup>

        </div>
      )
    }
  }

export default Page3;
