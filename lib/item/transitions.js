import Item from './record';

let counter = 0;
export function CreateItem(oldWorld, attrs) {
  let itemAttrs = Object.assign({}, attrs, {id: counter++});
  let item = new Item(itemAttrs);
  return oldWorld.setIn(['items', item.id], item);
}

export function DeleteItem(oldWorld, item) {
  return oldWorld.deleteIn(['items', item.id]);
}

export function ToggleItem(oldWorld, item) {
  return oldWorld.updateIn(['items', item.id, 'done'], value => !value);
}

export function SetDoneForAllItems(oldWorld, doneValue) {
  return oldWorld.updateIn(['items'], items =>
    items.map(i =>
      i.set('done', doneValue)
    )
  );
}
