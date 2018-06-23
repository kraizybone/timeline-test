import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import appReducer from './store/AppReducer';
import dashboardReducer from './store/DashboardReducer';

export default combineReducers({
  app: appReducer,
  dashboard: dashboardReducer,
  toastr: toastrReducer
});
