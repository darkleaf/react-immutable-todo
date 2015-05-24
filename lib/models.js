import Imm from 'immutable';

export const World = Imm.Record({
  items: new Imm.OrderedMap()
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
