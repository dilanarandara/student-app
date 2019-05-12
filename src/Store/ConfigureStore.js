import { createStore, combineReducers } from "redux";
import studentReducer from "../ducks/StudentList";
import subjectReducer from "../reducers/Subjects";

export default () => {
  const store = createStore(
    combineReducers({
      students: studentReducer,
      subjects: subjectReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
