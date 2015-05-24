import React from 'react';
//import tb from 'react-bootstrap';

import NewItem from './new-item';
import Item from './item';
import ToggleAll from './toggle-all';

export default React.createClass({
  render() {
    return (
      <div>
        <NewItem />

        <ToggleAll items={this.props.world.items} />

        {this.props.world.items.reverse().toList().map(item =>
            <Item key={item.id} item={item} />
        )}
      </div>
    );
  }
});
