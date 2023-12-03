import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';
import Loader from './components/Loader';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={History} />
        <Route exact path="/word/:word" component={WordDetails} />
        <Route component={Loader} />
      </Switch>
    </Router>
  );
};

export default App;