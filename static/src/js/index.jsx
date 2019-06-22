import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './router';
import rootReducer from './reducer';

const store = createStore(rootReducer)

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"))