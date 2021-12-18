import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Service from './components/Service'
import About from './components/About'
import Header from './components/Header/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/service/:id" component={Service} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

