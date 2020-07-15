import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth8961Saga from '../features/EmailAuth8961/redux/sagas';
import CalendarView8960Saga from '../features/CalendarView8960/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth8961Saga,
CalendarView8960Saga,
    
  ]);
}