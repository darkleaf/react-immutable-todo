import Imm from 'immutable';
import ItemFilters from '../item/filters'

export default Imm.Record({
  items: new Imm.OrderedMap(),
  itemsFilter: ItemFilters.keySeq().first()
});
