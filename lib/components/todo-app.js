import React from 'react';
//import tb from 'react-bootstrap';

import NewItem from './new-item';
import Item from './item';
import ToggleAll from './toggle-all';
import ItemsFilterSelect from './items-filter-select';

import Filters from '../item/filters';

export default React.createClass({
  currentItems() {
    const scope = Filters.get(this.props.world.itemsFilter);
    return this.props.world.items.filter(scope);
  },

  render() {
    return (
      <div>
        <NewItem />

        <ToggleAll items={this.currentItems()} />
        <ItemsFilterSelect currentFilter={this.props.world.itemsFilter} />

        {this.currentItems().reverse().toList().map(item =>
          <Item key={item.id} item={item} />
        )}
      </div>
    );
  }
});
