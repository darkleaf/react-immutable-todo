import worldAtom from './world';

export default function(transition, ...args) {
  worldAtom.swap(transition, ...args);
};
