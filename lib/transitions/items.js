import {Item} from '../models';

let counter = 0;
function CreateItem(oldWorld, attrs) {
  attrs['id'] = counter++;
  return oldWorld.update('items', oldItems => oldItems.push(new Item(attrs)));
}

export {CreateItem};
