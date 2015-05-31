import React from 'react';
//import tb from 'react-bootstrap';

import * as Filters from 'lib/filter/dictionary';

import NewItem from './new-item';
import Item from './item';
import ToggleAll from './toggle-all';
import ItemsFilterSelect from './items-filter-select';


export default React.createClass({
  currentItems() {
    const filterPredicate = Filters[this.props.world.itemsFilter];
    return this.props.world.items.filter(filterPredicate);
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
