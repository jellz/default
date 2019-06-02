import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Navbar from './components/Navbar';

// Code-splitting is automated for routes
import Home from './pages/Home';

export default class App extends Component {
  // Gets fired when the route changes
  // e.url is the new URL
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div class='app'>
        <Navbar />
        <Router onChange={this.handleRoute}>
          <Home path='/' />
        </Router>
      </div>
    );
  }
}
