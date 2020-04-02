import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "../modules/auth/SignIn";
import NotFound from "../modules/errors/NotFound";
import SignUp from "../modules/auth/SignUp";
import PanelLayout from "../components/layout/PanelLayout";

export default () => (
  <Switch>
    {/* Routes Login */}
    <Route path="/signIn" component={SignIn}></Route>
    <Route path="/signUp" component={SignUp}></Route>

    <Route path="/company" render={props => <PanelLayout {...props} />}></Route>

    <Redirect from="/" to="/signIn" />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
