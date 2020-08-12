import {createStore, combineReducers} from 'redux';
import { Dishess } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        dishes: Dishess,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders
        })
    );

    return store;
}