import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  //const [users, setUsers] = useState([]);
  //const [user, setUser] = useState({});
  //const [repos, setRepos] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [alert, setAlert] = useState(null);

  // Search Github users

  //Get a single github user

  //Get user's repos

  // Clear Users from state

  // Set alert

  return (
    <AlertState>
      <GithubState>
        <Router>
          <div className='App'>
            <div>
              <Navbar title=' Github Finder' icon='fab fa-github' />
            </div>
            <Alert /*alert={alert}*/ />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              {/* render={(props) => ( <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />
                )} */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
