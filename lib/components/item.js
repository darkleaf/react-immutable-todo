import React from 'react';
import tb from 'react-bootstrap';

import TransitionPerformer from 'lib/state/transition-performer';
import {ToggleItem, DeleteItem} from 'lib/item/transitions';

export default React.createClass({
  getInitialState() {
    return { text: this.props.item.text }
  },
  handleToggle(){
    TransitionPerformer(ToggleItem, this.props.item);
  },
  handleDelete(){
    TransitionPerformer(DeleteItem, this.props.item);
  },
  render() {
    let toggleButton =
      <tb.Button onClick={this.handleToggle} >
        <tb.Glyphicon glyph={this.props.item.done ? 'ok' : 'unchecked'} />
      </tb.Button>;
    let deleteButton =
      <tb.Button onClick={this.handleDelete} >
        <tb.Glyphicon glyph='remove' />
      </tb.Button>;

    return (
      <tb.Input
        type='text'
        ref='input'
        buttonBefore={toggleButton}
        buttonAfter={deleteButton}
        value={this.state.text}
        //onChange={this.handleChange}
      />
    );
  }
});
