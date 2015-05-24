import {Item} from '../models';

let counter = 0;
function CreateItem(oldWorld, attrs) {
  const itemAttrs = Object.assign({}, attrs, {id: counter++});
  return oldWorld.update('items', oldItems => oldItems.push(new Item(itemAttrs)));
}

export {CreateItem};
