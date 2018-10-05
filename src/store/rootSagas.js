import { all } from 'redux-saga/effects';

import clockSagas from '../features/clock/sagas';
import userDataSagas from '../features/userData/sagas';

function* rootSaga() {
    yield all([
        ...clockSagas,
        ...userDataSagas,
    ]);
}

export default rootSaga;