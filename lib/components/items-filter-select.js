import React from 'react';
import tb from 'react-bootstrap';

import Filters from '../item/filters';

import TransitionPerformer from '../world/transition-performer';
import {SetCurrentFilter} from '../item/filter-transitions';

export default React.createClass({
  handleClick(e) {
    TransitionPerformer(SetCurrentFilter, e.target.dataset.name);
  },
  render(){
    return (
      <tb.ButtonGroup>
        {Filters.keySeq().map(name => {
          let style = name == this.props.currentFilter ? 'primary' : 'default';
          return (
            <tb.Button key={name}
                       data-name={name}
                       bsStyle={style}
                       onClick={this.handleClick}>
              {name}
            </tb.Button>
          );
        })}
      </tb.ButtonGroup>
    );
  }
});


