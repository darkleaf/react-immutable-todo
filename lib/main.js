import 'bootstrap/css/bootstrap.css!';
import React from 'react';

import worldAtom from './world';
import Todo from './components/todo';


function render(world) {
  React.render(<Todo world={world} />, document.getElementById('todo-app'));
}


// setup data
import {CreateItem} from './transitions/items';
import TransitionPerformer from './transition-performer';
['first', 'second', 'third'].forEach(text =>
  TransitionPerformer(CreateItem, {text})
);
// end




worldAtom.addWatch('rerender', (_key, _ref, _old, newWorld) => render(newWorld));
//setInterval(() => render(worldAtom.deref()), 1000);




worldAtom.addWatch('log', (_key, _ref, _old, newWorld) => console.log(newWorld.toString()));

render(worldAtom.deref());


