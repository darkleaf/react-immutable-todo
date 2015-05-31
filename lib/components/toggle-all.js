import React from 'react';
import tb from 'react-bootstrap';

import TransitionPerformer from 'lib/state/transition-performer';
import {SetDoneForAllItems} from 'lib/item/transitions';

export default React.createClass({
  isEveryItemDone() {
    return this.props.items.every(item => item.done);
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
