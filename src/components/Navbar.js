import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import '../assets/styles/Navbar.css';
import MyProfile from './myProfile';
import Rockets from './rockets';

const Navbar = () => (

  <Router>
    <header>
      <div className="logo_cnt">
        <div className="logo" />
        <h1>
          Space Travelers Hub
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions" className="link">Missions</NavLink>
          </li>
          <hr className="line" />
          <li>
            <NavLink to="/myProfile" className="link">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/mission">
        {/* <Missions /> */}
      </Route>
      <Route path="/myProfile">
        <MyProfile />
      </Route>
    </Switch>
  </Router>
);

export default Navbar;
