import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import StatsDay from './pages/StatsDay';
import StatsWeek from './pages/StatsWeek';
import StatsMonth from './pages/StatsMonth';
import Account from './pages/Account';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/home' component={Home} />
          <Route path='/statsday' component={StatsDay} />
          <Route path='/statsweek' component={StatsWeek} />
          <Route path='/statsmonth' component={StatsMonth} />
          <Route path='/account' component={Account} />
        </Switch>
    </Router>
    
  );
}

export default App;

