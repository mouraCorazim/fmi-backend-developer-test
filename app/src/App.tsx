import { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';
import Insert from './components/Insert/main';

function App(): ReactElement{
  return (
    <>
      <Router>
        <header>
          <nav>
            <Link 
              to="/insert"> Insert </Link>
          </nav>
        </header>
        <section>
          <Switch>
            <Route exact path="/insert">
              <Insert />
            </Route>
          </Switch>
        </section>
      </Router>
    </>
  );
}

export default App;
