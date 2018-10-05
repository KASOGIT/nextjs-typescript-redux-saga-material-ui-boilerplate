import { combineReducers } from 'redux';

import clockReducer from '../features/clock/reducer';
import counterReducer from '../features/counter/reducer';
import userDataReducer from '../features/userData/reducer';

const rootReducer = combineReducers({
    clock: clockReducer,
    counter: counterReducer,
    userData: userDataReducer
});

export default rootReducer;