import ImmDiff from 'immutablediff';
import worldAtom from './atom';

worldAtom.addWatch('log', (_key, _ref, oldWorld, newWorld) =>
  console.log('World diff: ', ImmDiff(oldWorld, newWorld).toString())
);
