import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/bootstrap3.scss';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/past-trials" component={App} />
        <Route path="/how-it-works" component={App} />
        <Route path="/log-in" component={App} />
        <Route path="/sign-up" component={App} />
        <Route path="/search" component={App} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
