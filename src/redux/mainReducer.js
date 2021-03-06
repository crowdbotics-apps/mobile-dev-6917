import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7424Reducer from '../features/EmailAuth7424/redux/reducers';
import CalendarView7423Reducer from '../features/CalendarView7423/redux/reducers';
import CalendarView7419Reducer from '../features/CalendarView7419/redux/reducers';
import EmailAuth7418Reducer from '../features/EmailAuth7418/redux/reducers';
import EmailAuth7415Reducer from '../features/EmailAuth7415/redux/reducers';
import CalendarView7414Reducer from '../features/CalendarView7414/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7424: EmailAuth7424Reducer,
CalendarView7423: CalendarView7423Reducer,
CalendarView7419: CalendarView7419Reducer,
EmailAuth7418: EmailAuth7418Reducer,
EmailAuth7415: EmailAuth7415Reducer,
CalendarView7414: CalendarView7414Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});