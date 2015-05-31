export function SetCurrentFilter(oldWorld, newFilter) {
  return oldWorld.setIn(['itemsFilter'], newFilter);
}
