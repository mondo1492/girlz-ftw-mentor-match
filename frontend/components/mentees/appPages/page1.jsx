import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page1 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div>
          <h3 className="pageCaption">Our Mentee Application</h3>
          <div className='green-spacer'></div>
          <Col className='formFontStyle'
             smOffset={2} sm={8}
             mdOffset={2} md={8}
             lgOffset={2} lg={8}
             >
            Hello! Thank you for your interest in the GIRLZ, FTW mentorship program. We’re thrilled to read your application. Before you fill out our form, we’d like to let you in on a little secret. We’re not a regular mentorship program. We’re a community of girlz who are passionate about elevating and celebrating female voices around the world. In this program, you won’t be paired with THAT girl… you know, the one that always had her shit together and still always managed to blow dry her hair before school / work. The mentors in our program are real, passionate, #girlbosses that don’t pretend to be perfect, can hustle their way to their dreams, and still manage to uplift others along the way.
          </Col>
        </div>
      );
    }
  }

export default Page1;
