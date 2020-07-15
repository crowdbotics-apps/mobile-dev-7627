import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth8961Reducer from '../features/EmailAuth8961/redux/reducers';
import CalendarView8960Reducer from '../features/CalendarView8960/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth8961: EmailAuth8961Reducer,
CalendarView8960: CalendarView8960Reducer,

});