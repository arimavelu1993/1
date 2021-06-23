import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Route, Switch, Redirect } from "react-router-dom";
import Auth from "./layout/Auth";
import User from "./layout/User";
import 'react-day-picker/lib/style.css';

ReactDOM.render(
  <BrowserRouter  >  
      <Switch>
        <Route  path='/auth'  render={props => <Auth {...props} />} />
        <Route  path='/user'  render={props => <User {...props} />} />
        <Redirect from="/auth/login" to="/auth" />  
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
