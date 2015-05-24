import React from 'react';
import tb from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <div>{this.props.item.text}</div>
    );
  }
});
