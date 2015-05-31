import React from 'react';
import tb from 'react-bootstrap';

import * as Filters from 'lib/filter/dictionary';
import TransitionPerformer from 'lib/state/transition-performer';
import {SetCurrentFilter} from 'lib/filter/transitions';

const FilterButton = React.createClass({
  handleClick() {
    TransitionPerformer(SetCurrentFilter, this.props.name);
  },
  render() {
    let style = this.props.name == this.props.current ? 'primary' : 'default';
    return (
      <tb.Button data-name={this.props.name}
                 bsStyle={style}
                 onClick={this.handleClick}>
        {this.props.name}
      </tb.Button>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <tb.ButtonGroup>
        {Object.keys(Filters).map(filterName =>
          <FilterButton key={filterName} name={filterName} current={this.props.currentFilter} />
        )}
      </tb.ButtonGroup>
    );
  }
});
