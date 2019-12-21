import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Main from "./containers/Main";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <Main />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
