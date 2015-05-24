function SetCurrentFilter(oldWorld, newScope) {
  return oldWorld.updateIn(['itemsFilter'], scope => newScope);
}

export {SetCurrentFilter};
