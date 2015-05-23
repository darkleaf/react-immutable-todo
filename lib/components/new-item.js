import React from 'react';
import tb from 'react-bootstrap';
import PubSub from 'pubsub-js';
import ItemsConstants from '../constants/items';

export default React.createClass({
  getInitialState() {
    return {text: '' };
  },
  handleChange(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit() {
    PubSub.publish(ItemsConstants.CREATE, this.state);
  },
  render() {
    let button = <tb.Button onClick={this.handleSubmit}>Ok</tb.Button>;
    return (
      <tb.Input
        type='text'
        ref='input'
        buttonAfter={button}
        value={this.state.text}
        onChange={this.handleChange}
        autoFocus={true}
      />
    );
  }
});
