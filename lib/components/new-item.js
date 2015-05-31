import React from 'react';
import tb from 'react-bootstrap';

import TransitionPerformer from 'lib/state/transition-performer';
import {CreateItem} from 'lib/item/transitions';

const ENTER_KEY = 13;

export default React.createClass({
  getInitialState() {
    return {text: '' };
  },
  handleChange(e) {
    this.setState({text: e.target.value});
  },
  handleNewItemKeyDown: function (event) {
    if (event.which !== ENTER_KEY) return;
    if (this.state.text == '') return;

    event.preventDefault();

    TransitionPerformer(CreateItem, this.state);
    this.setState({text: ''});
  },
  render() {
    return (
      <tb.Input
        type='text'
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleNewItemKeyDown}
        autoFocus={true}
      />
    );
  }
});
