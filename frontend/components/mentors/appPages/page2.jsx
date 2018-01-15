import React from 'react';
import { Col, Row, Grid, Form, Button, Panel, FormControl, ControlLabel, FormGroup, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class Page2 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
          <div>
            <Grid>
              <Row>
                <Col sm={2}></Col>
                <Col className='centerText formFontStyle2' sm={8}>
                  What you should know before submitting your application:
                </Col>
              </Row>
              <Row>
                <Col sm={2}></Col>
                <Col className='centerText formFontStyle' sm={8}>
                  - 	All of our communication once you join the program happens on Facebook.
                </Col>
              </Row>
              <Row>
                <Col sm={2}></Col>
                <Col className='centerText formFontStyle' sm={8}>
                  -   You must be able to free up the first Saturday of every month and commit at least 4 hours a month for 6 months.
                </Col>
              </Row>
            </Grid>
          </div>
      );
    }
  }

export default Page2;
