import React from 'react';
import tb from 'react-bootstrap';

import TransitionPerformer from 'lib/state/transition-performer';
import {CreateItem} from 'lib/item/transitions';

export default React.createClass({
  getInitialState() {
    return {text: ''};
  },
  handleChange(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    TransitionPerformer(CreateItem, this.state);
    this.setState(this.getInitialState());
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <tb.Row>
          <tb.Col md={11}>

            <tb.Input
              type='text'
              value={this.state.text}
              onChange={this.handleChange}
              autoFocus={true}
            />

          </tb.Col>
          <tb.Col md={1}>

            <tb.Button block type='submit'>
              Ok
            </tb.Button>

          </tb.Col>
        </tb.Row>
      </form>
    );
  }
});
