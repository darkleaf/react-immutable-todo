import ImmDiff from 'immutablediff';
import stateAtom from 'lib/state/atom';

stateAtom.addWatch('log', (_key, _ref, oldState, newState) =>
  console.log('State diff: ', ImmDiff(oldState, newState).toString())
);
