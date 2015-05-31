import Imm from 'immutable';

export function All() {
  return true;
}
export function Active(item) {
  return !item.done;
}
export function Done(item) {
  return item.done;
}
