import stateAtom from './atom';

export default function(transition, ...args) {
  //console.log(transition.name, JSON.stringify(args));

  stateAtom.swap(transition, ...args);
};
