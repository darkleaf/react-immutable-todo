import React from 'react';
//import tb from 'react-bootstrap';

import NewItem from './new-item';
import Item from './item';

export default React.createClass({
  render() {
    return (
      <div>
        <NewItem />
        <div>
          {this.props.world.items.map(item => <Item key={item.id} item={item} />)}
        </div>
      </div>
    );
  }
});
