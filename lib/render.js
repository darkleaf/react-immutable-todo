import React from 'react';
import worldAtom from 'lib/state/atom';
import TodoApp from 'lib/components/todo-app';

function render(world) {
  React.render(<TodoApp world={world} />, document.getElementById('todo-app'));
}
render(worldAtom.deref());

worldAtom.addWatch('rerender', (_key, atom) => render(atom.deref()));
//setInterval(() => render(worldAtom.deref()), 1000);
