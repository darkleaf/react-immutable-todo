import React from 'react';
import stateAtom from 'lib/state/atom';
import TodoApp from 'lib/components/todo-app';

function render(state) {
  React.render(<TodoApp state={state} />, document.getElementById('todo-app'));
}
render(stateAtom.deref());

stateAtom.addWatch('rerender', (_key, atom) => render(atom.deref()));
//setInterval(() => render(stateAtom.deref()), 1000);
