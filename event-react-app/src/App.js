import weather from './weather.jpg'
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
              <Link className="Link" to="/weather">Weather</Link>
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
            <Route path="/weather/:id">
              <CurrentEventsProgress />
            </Route>
            <Route path="/weather">
              <Redirect to={`/weather/${moment().format('YYYY-MM-DD')}`} />
            </Route>
            
            <Route path="/workers">
              <WeeklyScheduler/>
            </Route>
            
            <Route path="/">
              <h1>Welcome to RedPeas Weather</h1>
              <p>Welcome to ReadPeas. Please see now <Link to="/weather"> weather.</Link></p>
              <img className='weather' src={weather} />
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