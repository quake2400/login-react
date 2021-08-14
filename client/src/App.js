import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

function App() {
  const user = useContext(AuthContext);
  console.log(user.user);
  return (
    <Router>
      <Switch>
        {user.user !== null ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Redirect to="/login" />
            <Route exact path="/login">
              <Login />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
