import React, { Component } from 'react';
import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
class App extends Component {
  render() {
    const { isAuthenticated, isInitializing } = this.props.AuthStore;
    if (isInitializing) return null;
    return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
  }
}

export default App;
