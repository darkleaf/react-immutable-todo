import worldAtom from './world';

export default function(transition, ...args) {
  //console.log(transition.name, JSON.stringify(args));

  worldAtom.swap(transition, ...args);
};
