import React from 'react';
import tb from 'react-bootstrap';
//import PubSub from 'pubsub-js';
//import ItemsConstants from '../constants/items';

export default React.createClass({
  render() {
    return (
      <div>{this.props.item.text}</div>
    );
  }
});
