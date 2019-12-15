import React from 'react';
import ReactDOM from 'react-dom';
import { Route , BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/bootstrap3.scss';
import './assets/styles/index.scss';
import App from './App';
import PastTrials from '../src/components/pages/pastTrialsPage'
import HowIt from '../src/components/pages/howItWorksPage'
import LogIn from '../src/components/pages/logIn'
import SignUp from '../src/components/pages/signUp'
import Search from '../src/components/pages/searchPage'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/past-trials" component={PastTrials} />
        <Route path="/how-it-works" component={HowIt} />
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
