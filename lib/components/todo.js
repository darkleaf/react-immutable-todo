import React from 'react';
//import tb from 'react-bootstrap';

import NewItem from './new-item';
import Item from './item';

export default React.createClass({
  render() {
    return (
      <div>
        <NewItem />
        {this.props.world.items.entrySeq().reverse().map(([id, item]) =>
          <Item key={id} item={item} />
        )}
      </div>
    );
  }
});
