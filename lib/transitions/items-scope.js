import {Scope} from '../scopes/items';

function SetItemsScope(oldWorld, newScope) {
  return oldWorld.updateIn(['itemsScope'], scope => newScope);
}

export {SetItemsScope};
