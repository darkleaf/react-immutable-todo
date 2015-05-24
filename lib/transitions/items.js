import {Item} from '../models';

let counter = 0;
function CreateItem(oldWorld, attrs) {
  return oldWorld.update('items', oldItems => oldItems.set(counter++, new Item(attrs)));
}

export {CreateItem};
