import React from "react";
import './sass/style.css';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Dashboard from './components/DashBoard/DashBoard';
import MainBoard from './components/DashBoard/BoardDetail/MainBoard';
import SignIn from './components/Account/SignIn';
import SignUp from './components/Account/SignUp';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Dashboard />
          </Route>
          <Route path="/board/:id">
          <MainBoard/>
          </Route>
          <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
        <SignUp/>
      </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
