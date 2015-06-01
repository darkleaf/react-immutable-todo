export function SetCurrentFilter(state, filterName) {
  return state.setIn(['itemsFilter'], filterName);
}
