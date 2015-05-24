import Imm from 'immutable';

const ItemRec = Imm.Record({
  id: undefined,
  text: '',
  done: false
});

export default class Item extends ItemRec {
  toggle(){
    return this.set('done', !this.done);
  }
}
