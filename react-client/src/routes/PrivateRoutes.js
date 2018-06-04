import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import SideBar from '../components/sidebar/SideBar';
import DashBoard from '../components/dashboard/DashBoard';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

@inject('AuthStore')
@observer
class PrivateRoutes extends Component {
  componentDidMount() {
    // this.props.StationsStore.getStations(this.props.AuthStore.token);
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <SideBar />
          <div className="container">
            <Switch>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/dashboard" component={DashBoard} />
              <Redirect to="/dashboard" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default PrivateRoutes;
