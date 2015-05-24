import React from 'react';
import tb from 'react-bootstrap';

import TransitionPerformer from '../world/transition-performer';
import {SetDoneForAllItems} from '../item/transitions';

export default React.createClass({
  isEveryItemDone() {
    return this.props.items.every( item => item.done );
  },
  handleToggle(){
    TransitionPerformer(SetDoneForAllItems, !this.isEveryItemDone());
  },
  render() {
    return (
      <tb.Button onClick={this.handleToggle}>
        <tb.Glyphicon glyph={this.isEveryItemDone() ? 'ok' : 'unchecked'} />
      </tb.Button>
    );
  }
});
