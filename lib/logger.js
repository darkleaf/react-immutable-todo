import ImmDiff from 'immutablediff';
import worldAtom from 'lib/state/atom';

worldAtom.addWatch('log', (_key, _ref, oldWorld, newWorld) =>
  console.log('State diff: ', ImmDiff(oldWorld, newWorld).toString())
);
