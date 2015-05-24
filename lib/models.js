import Imm from 'immutable';

export const World = Imm.Record({
  items: new Imm.OrderedMap()
});

const ItemRec = Imm.Record({
  id: undefined,
  text: '',
  state: 'active'
});

export class Item extends ItemRec {
  nextState(){
    if (this.state == 'active') {
      return 'done';
    } else {
      return 'active';
    }
  }
  toggle(){
    return this.set('state', this.nextState());
  }
}
