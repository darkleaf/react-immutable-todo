import React from 'react';
import tb from 'react-bootstrap';

import Scope from '../scopes/items';

import TransitionPerformer from '../transition-performer';
import {SetItemsScope} from '../transitions/items-scope';

export default React.createClass({
  handleClick(e) {
    TransitionPerformer(SetItemsScope, e.target.dataset.name);
  },
  render(){
    return (
      <tb.ButtonGroup>
        {Scope.keySeq().map(name => {
          let style = name == this.props.currentScope ? 'primary' : 'default';
          return (
            <tb.Button data-name={name} bsStyle={style} onClick={this.handleClick}>
              {name}
            </tb.Button>
          );
        })}
      </tb.ButtonGroup>
    );
  }
});


