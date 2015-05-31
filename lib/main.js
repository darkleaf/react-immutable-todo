import 'bootstrap/css/bootstrap.css!';
import 'stylesheets/overrides.css!';

import 'lib/render';
import 'lib/logger';

// setup data
import {CreateItem} from 'lib/item/transitions';
import TransitionPerformer from 'lib/state/transition-performer';
['first', 'second', 'third'].forEach(text =>
    TransitionPerformer(CreateItem, {text})
);
// end
