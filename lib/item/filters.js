import Imm from 'immutable';

export default Imm.OrderedMap({
  all() {
    return true;
  },
  active(item) {
    return !item.done;
  },
  done(item) {
    return item.done;
  }
});
