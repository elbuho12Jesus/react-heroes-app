import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";  
  import {LoginScreem} from '../components/login/LoginScreem';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {AuthContext} from '../auth/AuthContext';

export const AppRouter = () => {
  const {user} = useContext(AuthContext)
    return (
        <Router>
      <div>               
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreem} isAuthenticated={user.logged} />
          <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
        </Switch>
      </div>
    </Router>
    )
}
