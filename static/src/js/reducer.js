import { combineReducers } from 'redux'
import LandingPageReducer from 'pages/landingPage/_reducer/LandingPageReducer';

export default combineReducers({
  landingPage: LandingPageReducer,
})