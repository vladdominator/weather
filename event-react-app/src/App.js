import food from './food.jpg'
import './App.css';
import React from 'react';
import WeeklyScheduler from './components/Monthly';
import CurrentEventsProgress from 'components/CurrentEventsProgress';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,  
  useLocation
} from "react-router-dom";
import moment from 'moment'
import PlaneMenu from 'components/PlaneMenu';

function App() {
  return (

<Router>
    <div>
        <nav className="nav__gh">
          <ul className="AppNav">
            <li>
              <Link className="Link" to="/">Home</Link>
            </li>
            <li>
              <Link className="Link" to="/goodies">Today goodies</Link>
            </li>
            <li>
              <Link className="Link" to="/workers">Workers</Link>
            </li>
            <li>
              <Link className="Link" to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App">
         
        <section> 
          <Switch>
            <Route path="/planemenu">
              <PlaneMenu />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/goodies/:id">
              <CurrentEventsProgress />
            </Route>
            <Route path="/goodies">
              <Redirect to={`/goodies/${moment().format('YYYY-MM-DD')}`} />
            </Route>
            
            <Route path="/workers">
              <WeeklyScheduler/>
            </Route>
            
            <Route path="/">
              <h1>Welcome to ReadPeas</h1>
              <p>Welcome to ReadPeas. Please order now <Link to="/flights">foods.</Link></p>
              <img className='food' src={food} />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
          

        </section>
      </div>
    </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>
        About Us
      </h2>
      <p>This is a project for BSU.</p>
    </div>
  );
}
 
export default App;