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
            <h3 className='pageCaption'>Before we begin</h3>
            <div className='green-spacer'></div>
            <Grid>
              <Row>
                <Col className='formFontStyle' smOffset={2} sm={8}>
                  <li>
                    The program is six months long. The first three months you'll have bi-weekly calls with your mentor (once every other week). The last three months you'll have a monthly call. This is the minimum requirement for the program, but you're more than welcome to chat with your mentor on a more regular basis.
                  </li>
                </Col>
              </Row>
              <Row>
                <Col className='formFontStyle'
                  sm={8} smOffset={2}
                   >
                  <li>
                    As all of our communication during the program happens on Facebook, you must have a Facebook profile to join.
                  </li>
                </Col>
              </Row>
              <Row>
                <Col className='formFontStyle' smOffset={2} sm={8}>
                  <li>
                    We have mandatory, virtual chats with inspiring women on the first Saturday of every month. You can only miss up to two calls (with advanced notice).
                  </li>
                </Col>
              </Row>
            </Grid>
          </div>
      );
    }
  }

export default Page2;
