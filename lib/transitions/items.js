import {Item} from '../models';

let counter = 0;
function CreateItem(oldWorld, attrs) {
  const itemAttrs = Object.assign({}, attrs, {id: counter++});
  const item = new Item(itemAttrs);
  return oldWorld.update('items', oldItems => oldItems.set(item.id, item));
}

function DeleteItem(oldWorld, item) {
  return oldWorld.update('items', oldItems => oldItems.delete(item.id));
}

function ToggleItem(oldWorld, item) {
  return oldWorld.updateIn(['items', item.id], oldItem => oldItem.toggle());
}

export {CreateItem, DeleteItem, ToggleItem};
