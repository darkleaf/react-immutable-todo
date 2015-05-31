import Imm from 'immutable';
import * as Filters from 'lib/filter/dictionary';

export default Imm.Record({
  items: new Imm.OrderedMap(),
  itemsFilter: Filters.All.name
});
