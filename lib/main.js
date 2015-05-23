import 'bootstrap/css/bootstrap.css!';
import React from 'react';

import worldAtom from './world';
import Todo from './components/todo';

import './actions/items';

function render(world) {
  React.render(<Todo world={world} />, document.getElementById('todo-app'));
}

worldAtom.addWatch('rerender', (_key, _ref, _old, newWorld) => render(newWorld));

render(worldAtom.deref());

