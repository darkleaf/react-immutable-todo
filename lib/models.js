import Imm from 'immutable';
import ItemsScope from './scopes/items';

window.a = ItemsScope;


export const World = Imm.Record({
  items: new Imm.OrderedMap(),
  itemsScope: ItemsScope.keySeq().first()
});

const ItemRec = Imm.Record({
  id: undefined,
  text: '',
  done: false
});

export class Item extends ItemRec {
  toggle(){
    return this.set('done', !this.done);
  }
}
