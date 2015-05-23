import PubSub from 'pubsub-js';

import {Item} from '../models';
import ItemsConstants from '../constants/items';
import worldAtom from '../world';

let counter = 0;
function Create(oldWorld, attrs) {
  attrs['id'] = counter++;
  return oldWorld.update('items', oldItems => oldItems.push(new Item(attrs)));
}

PubSub.subscribe(ItemsConstants.CREATE, (_msg, attrs) => worldAtom.swap(Create, attrs));


export { Create };
