import React from 'react';
import { Col, Form, Button, Panel, InputGroup, FormControl, ControlLabel, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';


class Page3 extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>

            <ControlLabel>
              What was your college major? *
            </ControlLabel>
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

            <ControlLabel>
              In which industry do you work? *
            </ControlLabel>
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

        </div>
      )
    }
  }

export default Page3;
