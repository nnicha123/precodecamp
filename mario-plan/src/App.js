import React, { Component } from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          {/* Make sure only one route loaded at a time */}
          <Switch>
            <Route path="/" component={DashBoard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
