import React from 'react';
import tb from 'react-bootstrap';

import * as Filters from 'lib/filter/dictionary';

import NewItem from './new-item';
import Item from './item';
import ToggleAll from './toggle-all';
import ItemsFilterSelect from './items-filter-select';


export default React.createClass({
  currentItems() {
    const filterPredicate = Filters[this.props.state.itemsFilter];
    return this.props.state.items.filter(filterPredicate);
  },
  render() {
    return (
      <tb.Grid>
        <tb.PageHeader>
          Todo list
        </tb.PageHeader>

        <NewItem />

        <tb.Row>
          <tb.Col sm={1}>

            <ToggleAll items={this.currentItems()} />

          </tb.Col>
          <tb.Col sm={10}>

            <ItemsFilterSelect currentFilter={this.props.state.itemsFilter} />

          </tb.Col>
        </tb.Row>

        {this.currentItems().reverse().toList().map(item =>
          <Item key={item.id} item={item} />
        )}
      </tb.Grid>
    );
  }
});
