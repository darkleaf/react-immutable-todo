import React from 'react';
//import tb from 'react-bootstrap';

import NewItem from './new-item';
import Item from './item';
import ToggleAll from './toggle-all';
import ItemsScope from './items-scope';

import Scope from '../scopes/items';

export default React.createClass({
  currentItems() {
    const scope = Scope.get(this.props.world.itemsScope);
    return this.props.world.items.filter(scope);
  },

  render() {
    return (
      <div>
        <NewItem />

        <ToggleAll items={this.currentItems()} />
        <ItemsScope currentScope={this.props.world.itemsScope} />

        {this.currentItems().reverse().toList().map(item =>
          <Item key={item.id} item={item} />
        )}
      </div>
    );
  }
});
