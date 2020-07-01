import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7418Saga from '../features/EmailAuth7418/redux/sagas';
import EmailAuth7415Saga from '../features/EmailAuth7415/redux/sagas';
import CalendarView7414Saga from '../features/CalendarView7414/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7418Saga,
EmailAuth7415Saga,
CalendarView7414Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}