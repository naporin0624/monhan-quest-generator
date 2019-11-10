import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </Provider>
    </React.Fragment>
  );
};
