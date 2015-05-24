import React from 'react';
import worldAtom from './atom';
import TodoApp from '../components/todo-app';

function render(atom) {
  React.render(<TodoApp world={atom.deref()} />, document.getElementById('todo-app'));
}
render(worldAtom);

worldAtom.addWatch('rerender', (_key, atom) => render(atom));
//setInterval(() => render(worldAtom), 1000);
