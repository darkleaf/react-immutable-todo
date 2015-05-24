import Imm from 'immutable';

export const World = Imm.Record({
  items: new Imm.OrderedMap()
});

export const Item = Imm.Record({
  id: undefined,
  text: '',
  state: 'active'
});
