import 'bootstrap/css/bootstrap.css!';
import './css/overrides.css!';

import './world/render';
import './world/logger';


// setup data
import {CreateItem} from './item/transitions';
import TransitionPerformer from './world/transition-performer';
['first', 'second', 'third'].forEach(text =>
    TransitionPerformer(CreateItem, {text})
);
// end
