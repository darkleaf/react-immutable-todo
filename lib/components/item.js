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
    return (
      <tb.Row>
        <tb.Col md={1}>
          <tb.Button onClick={this.handleToggle} block>
            <tb.Glyphicon glyph={this.props.item.done ? 'ok' : 'unchecked'} />
          </tb.Button>
        </tb.Col>
        <tb.Col md={10}>
          <tb.Input
            type='text'
            ref='input'
            value={this.state.text}
            bsStyle={this.props.item.done ? 'success' : ''}
            //onChange={this.handleChange}
          />
        </tb.Col>
        <tb.Col md={1}>
          <tb.Button onClick={this.handleDelete} block>
            <tb.Glyphicon glyph='remove' />
          </tb.Button>
        </tb.Col>

      </tb.Row>
    );
  }
});
