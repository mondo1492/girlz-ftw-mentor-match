import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class TierChangeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalTier: null,
      originalUserId: null,
      mentee: this.props.mentee,
      madeChange: false,
      currentTier: this.props.mentee.tier,
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState( { originalTier: this.props.mentee.tier, originalUserId: this.props.mentee.user_id } );
  }

  handleChange(e) {
    let newMentee = this.state.mentee;
    if (this.state.originalTier.toString() === e.target.value) {
      newMentee.tier = this.state.originalTier;
      newMentee.approved = true;
      newMentee.user_id = this.state.originalUserId;
    } else if (e.target.value === "4") {
      newMentee.tier = 4;
      newMentee.approved = false;
      newMentee.user_id = null;
    } else {
      newMentee.tier = e.target.value;
      newMentee.approved = true;
      newMentee.user_id = this.state.originalUserId;
    }
    this.setState({mentee: newMentee, madeChange: true});
  }

  handleSubmit() {
    this.setState( { submitted: true });
    let newMenteeInfo = this.state.mentee;
    this.props.updateMentee(newMenteeInfo).then(() => {
      this.props.updateStateWithNewTiers(newMenteeInfo);
    }, ()=> {
    });

    this.props.closeModal();
  }

  render() {
    return(
      <div>
        <h2>Change {this.state.mentee.first_name} Tier</h2>
        <div>
          <h4>Current Tier is {this.state.originalTier}</h4>
        </div>
        <div>
          New Tier is
        </div>
        <select onChange={(e) => this.handleChange(e)}>
          <option value={`${this.state.originalTier}`}>Current Tier - {this.state.originalTier}</option>
          {this.state.originalTier.toString() === '1' ? "" : <option value='1'>1 - Amazing</option>}
          {this.state.originalTier.toString() === '2' ? "" : <option value='2'>2 - Pretty good</option>}
          {this.state.originalTier.toString() === '3' ? "" : <option value='3'>3 - We'll see</option>}
          {this.state.originalTier.toString() === '4' ? "" : <option value='4'>4 - rejected</option>}
        </select>
        {(() => {
            switch(true) {
                case this.state.mentee.tier.toString() === '4':
                  return <Button onClick={() => this.handleSubmit()}>Change Tier and Reject</Button>;
                case this.state.madeChange && this.state.originalTier !== this.state.mentee.tier:
                  return <Button onClick={() => this.handleSubmit()}>Change Tier!!!</Button> ;
                default:
                  return <Button onClick={() => this.props.closeModal()}>No thanks, I'll leave it as is</Button>;
            }
        })()}
      </div>
    );
  }
}

export default TierChangeView;
