import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page9 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
          <div>
            <h3 className='centerText'>
              Thanks for applying to be a Girlz, FTW mentee {this.props.name}! We're super excited to read your application!
            </h3>
            <br/>
            <h5>
              So what happens next?
            </h5>
            <p>
              Applications will be reviewed after February 16th, 2018, and all applicants will be contacted on March 8th, 2018.
            </p>
            <br/>
            <p>
              If you have any bursting questions, head over to our <a href='www.girlzftw.com/faq'>FAQs</a>.
              If you can't find your question on our FAQs, send us an email and we'll do our best to answer your question!
            </p>
            <br/>
            <h4>
             See our latest news here: <a href='www.girlzftw.com'>girlzftw.com</a>.
            </h4>
            <br/>
            <p>Cheers!</p>
            <p> The Girlz, FTW Team</p>
          </div>
      )
    }
  }

export default Page9;
