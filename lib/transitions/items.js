import {Item} from '../models';

let counter = 0;
function CreateItem(oldWorld, attrs) {
  let itemAttrs = Object.assign({}, attrs, {id: counter++});
  let item = new Item(itemAttrs);
  return oldWorld.setIn(['items', item.id], item);
}

function DeleteItem(oldWorld, item) {
  return oldWorld.deleteIn(['items', item.id]);
}

function ToggleItem(oldWorld, item) {
  return oldWorld.updateIn(['items', item.id], i => i.toggle());
}

export {CreateItem, DeleteItem, ToggleItem};
