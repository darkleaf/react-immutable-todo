import Item from './record';

let counter = 0;
export function CreateItem(state, attrs) {
  let itemAttrs = Object.assign({}, attrs, {id: counter++});
  let item = new Item(itemAttrs);
  return state.setIn(['items', item.id], item);
}

export function DeleteItem(state, item) {
  return state.deleteIn(['items', item.id]);
}

export function ToggleItem(state, item) {
  return state.updateIn(['items', item.id, 'done'], value => !value);
}

export function SetDoneForAllItems(state, doneValue) {
  return state.updateIn(['items'], items =>
    items.map(i =>
      i.set('done', doneValue)
    )
  );
}
