import Imm from 'immutable';

export const World = Imm.Record({
  items: new Imm.List()
});

export const Item = Imm.Record({
  id: undefined,
  text: ''
});
